import React, { useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const SignUp = () => {

    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false)

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value;
    console.log(email, password);
    setSuccess(false)
    setErrorMessage('');


      //password validate

      const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if(passwordRegExp.test(password) === false){
        setErrorMessage('password must have one lowercase,one Uppercase, one digit and 6 characters or longer.')
        return;
      }


      //create user
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
          <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            className="input"
            placeholder="Password"
          />
          <button onClick={()=>{setShowPassword(!showPassword)}} className="btn btn-xs absolute top-2 right-8">
          {
            showPassword ? <FaEyeSlash/> : <FaEye/>
          }
          </button>
          </div>
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
