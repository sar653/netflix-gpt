import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import checkValidate from "./CheckValidate";
import { auth } from "../utils/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser, } from "../utils/userSlice";

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  
  const toggleSignInForm = () => {
    setSignInForm(!SignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidate(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!SignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: username.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          }).then(() => {
            // Profile updated!
            // ...
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          });

          //navigate("/Browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
         // navigate("/Browser");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, errorMessage);
        });
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix"
        ></img>
      </div>
      <div className="absolute h-100vh flex justify-center items-center w-100p ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-black  w-300 h-300 flex flex-col"
        >
          <h1 className=" text-white p-6">
            {SignInForm ? "signin" : "  Signup"}
          </h1>
          <input
            className="p-2 m-2"
            type="email "
            placeholder="email"
            ref={email}
          ></input>
          {!SignInForm && (
            <input
              className="p-2 m-2"
              type="username "
              placeholder="username"
              ref={username}
            ></input>
          )}
          <input
            type="password"
            className="p-2 m-2"
            placeholder="password"
            ref={password}
          ></input>
          <p className="text-red-500 font-bold">{errorMessage}</p>
          <button
            className=" bg-red-500 p-2 m-2 text-white "
            onClick={handleButtonClick}
          >
            {SignInForm ? "signin" : "  Signup"}
          </button>
          <h2
            className="bg-black text-white cursor-pointer"
            onClick={toggleSignInForm}
          >
            {SignInForm
              ? "new to netflix  Signup"
              : "already registered? signin"}
          </h2>
        </form>
      </div>
    </div>
  );
};
export default Login;
