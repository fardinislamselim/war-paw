import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import googleLogo from "../assets/google.png"
import { GoogleAuthProvider } from "firebase/auth";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { createUser, updateUser, googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const name = e.target.name.value.trim();
    const photoURL = e.target.photo.value.trim();

    // Password validation
    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    setPasswordError("");


    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...createdUser, displayName: name, photoURL: photoURL });
            toast.success("🎉 Account created successfully!");
            navigate("/");
          })
          .catch(() => {
            setUser(createdUser);
            navigate("/");
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use. Try logging in.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address.");
        } else {
          toast.error(error.message || "Signup failed. Please try again.");
        }
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
  googleLogin(provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("🎉 Logged in with Google successfully!");
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        toast.error(error.message || "Google login failed.");
      });
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-neutral font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-neutral font-medium mb-1">Photo URL</label>
            <input
              type="text"
              id="photo"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-neutral font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500 hover:text-primary"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-2 text-base-100"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-secondary font-semibold"
          >
            Login
          </Link>
        </p>
        <div className="mt-4 divider"> OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary w-full flex items-center justify-center gap-2 mt-4"
        >
          <img src={googleLogo} alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
