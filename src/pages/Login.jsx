import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../assets/images/Login/logo.png";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Checkbox from "../components/Checkbox";
import { login } from "../redux/action/login";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onClick = (e) => {
    e.preventDefault();
    const handleSuccess = (data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("data", JSON.stringify(data));
      const check =
        data === null ? alert("email or password is wrong") : navigate("/");
      return check;
    };
    console.log(form);

    if (form.email === "" || form.password === "") {
      alert("semua input wajib diisi");
    } else {
      dispatch(login(form, handleSuccess));
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:flex-1 md:bg-login relative md:h-screen bg-cover bg-center hidden md:block">
        <div className="absolute inset-0 bg-primary bg-opacity-80" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">
            <img src={Logo} className alt="logo" />
          </h1>
        </div>
      </div>
      <div className="md:flex-1 h-full bg-slate-50">
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="mb-8 text-primary text-3xl font-bold font-inter">
            Welcome
          </h1>
          <p className="mb-17 font-inter text-lg text-slate-400 hover:text-primary">
            Log in into your exiting account
          </p>
          <div className="flex flex-col border-y py-4">
            <TextInput
              text="E-mail"
              placeholder="examplexxx@gmail.com"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextInput
              text="Password"
              placeholder="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <div className="flex items-center mt-4">
              <Checkbox />
            </div>
            <Button text="Login" onClick={(e) => onClick(e)} />
            <a
              href="forgot-password"
              className="mt-4 text-slate-400 text-xs font-inter text-right font-semibold hover:text-slate-600"
            >
              Forgot Password ?
            </a>
          </div>
          <p className="text-center mt-6 text-slate-400 font-inter">
            Don't have an account?
            <a href="/register" className="text-primary hover:text-yellow-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
