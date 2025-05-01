import React, { useState } from "react";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    setSuccess(false);
    setErrorMessage("");

    if (!terms) {
      setErrorMessage("Please accept our Terms and Conditions.");
      return;
    }

    // ✅ password validate (fixed message and regex)
    const passwordRegExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}/;
    if (!passwordRegExp.test(password)) {
      setErrorMessage(
        "Password must be at least 6 characters, contain one lowercase, one uppercase, and one digit."
      );
      return;
    }

    try {
      // ✅ create user
      const result = createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", result.user);

      // ✅ update user profile
      updateProfile(result.user, {
        displayName: name,
        photoURL: photo,
      });
      console.log("User profile updated");

      // ✅ send email verification
      sendEmailVerification(result.user);
      console.log("Verification email sent");

      setSuccess(true);
    } catch (error) {
      console.error(error);
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already in use.");
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-3 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Please SignUp now!</h1>

        <form onSubmit={handleSignUp}>
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
            required
          />

          <label className="label mt-2">Photo URL:</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />

          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label mt-6">Password:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-xs absolute top-2 right-8"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <label className="label mt-2">
            <input type="checkbox" name="terms" className="checkbox mr-2" />
            Accept Terms and Conditions
          </label>

          <button type="submit" className="btn btn-neutral mt-4">
            Sign Up
          </button>
        </form>

        <p className="mt-3">
          Already have an account?{" "}
          <Link className="text-blue-500 underline" to="/login">
            Login
          </Link>
        </p>

        {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
        {success && (
          <p className="text-green-600 mt-2">
            User has been created successfully. Please check your email for
            verification.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
