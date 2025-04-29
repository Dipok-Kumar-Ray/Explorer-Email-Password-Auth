import React, { useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value;
    console.log(email, password);
    setSuccess(false)
    setErrorMessage('');

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("");
        console.log(result);
        setSuccess(true);
      })
      .catch((error) => {
        setErrorMessage(error.message)
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-3 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Please SignUp now!</h1>

        <form onSubmit={handleSignUp}>
          <label className="label">Email : </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label mt-6">Password : </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button onSubmit={handleSignUp} className="btn btn-neutral mt-4">
            Sign Up
          </button>
        </form>
        {
            errorMessage && <p className="text-red-600"> {errorMessage}</p>
        }
        {
            success && <p className="text-green-600">User has created successfully</p>
        }
      </div>
    </div>
  );
};

export default SignUp;
