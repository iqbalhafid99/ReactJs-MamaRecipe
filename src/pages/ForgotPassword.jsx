import React, { useEffect } from "react";
import Logo from "../assets/images/Login/logo.png";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const ForgotPassword = () => {
  useEffect(() => {
    document.title = "Forgot Password";
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1 relative bg-login md:h-screen bg-cover bg-center hidden md:block">
        <div className="absolute inset-0 bg-primary bg-opacity-80" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">
            <img src={Logo} className alt="logo" />
          </h1>
        </div>
      </div>
      <div className="md:flex-1 h-full bg-slate-50">
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="mb-8 text-primary md:text-3xl text-2xl font-bold font-inter">
            Forgot Password?
          </h1>
          <p className="mb-17 font-inter text-base md:text-lg text-slate-400 hover:text-primary text-center">
            We just need your registered e-mail address <br />
            to send your password resend
          </p>
          <div className="flex flex-col border-t pt-4">
            <TextInput text="E-mail" placeholder="examplexxx@gmail.com" />
            <Button text="Send E-mail" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
