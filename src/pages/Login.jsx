import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import googleLogo from "../assets/google.png";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, setUser, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const getErrorMessage = (code) => {
    if (!code) return "Login failed. Please try again.";

    const c = code.toLowerCase().trim();

    if (c === "auth/user-not-found") {
      return "No user found with this email.";
    } else if (c === "auth/wrong-password") {
      return "Incorrect password. Please try again.";
    } else if (c === "auth/invalid-email") {
      return "Invalid email address.";
    } else if (c === "auth/user-disabled") {
      return "This user has been disabled.";
    } else {
      return "Login failed. Please try again.";
    }
  };

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        toast.success("Login successful!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        const code = error.code;
        const message = getErrorMessage(code);
        toast.error(message);
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google login successful!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message || "Google login failed.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Login
        </h2>
        <form onSubmit={handelLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-neutral font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-neutral font-medium mb-1">
              Password
            </label>
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
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                const email = document.getElementById("email").value;
                navigate("/forget-password", { state: { email } });
              }}
              className="text-primary hover:text-secondary text-sm"
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-2 text-base-100"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary hover:text-secondary font-semibold"
          >
            Signup
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default LoginPage;
