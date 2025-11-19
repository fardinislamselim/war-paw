import React, { useState, useEffect, useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    forgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Please check your inbox.");
        const gmailUrl = "https://mail.google.com/";
        window.open(gmailUrl, "_blank");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });

    const gmailUrl = "https://mail.google.com/";
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="flex items-center justify-center bg-base-200 py-20 px-4">
      <div className="w-full max-w-md bg-base-200 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-neutral font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-2 text-base-100"
          >
            Reset Password
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ForgetPassword;
