import React, { useState } from "react";
import Logo from "../assets/images/Login/logo.png";
import axios from "axios";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Register() {
  // REGISTER
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim permintaan POST menggunakan Axios
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/register`, formData)
      .then((response) => {
        // Berhasil, lakukan tindakan setelah registrasi sukses
        console.log(response.data);
        alert("Registration successful!");

        navigate("/login");
      })
      .catch((error) => {
        // Tangani error jika terjadi
        console.error(error);
      });
  };

  return (
    <>
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
            <div className="mt-36 md:mt-0">
              <h1 className="md:text-3xl md:8 mb-2 text-primary text-2xl font-bold font-inter text-center">
                Let's Get Started !
              </h1>
              <p className="md:mb-17 mb-2 font-inter md:text-lg text-base text-slate-400 hover:text-primary">
                Create new account to access all features
              </p>
            </div>
            <div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col border-t pt-4 gap-10"
              >
                <label className="flex flex-col text-base font-medium text-slate-500 gap-4">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masuk Nama"
                    className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-2 focus:ring-primary focus:shadow-slate-300 focus:shadow-2xl"
                  />
                </label>
                <label className="flex flex-col text-base font-medium text-slate-500 gap-4">
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukan Email"
                    className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-2 focus:ring-primary focus:shadow-slate-300 focus:shadow-2xl"
                  />
                </label>
                <label className="flex flex-col text-base font-medium text-slate-500 gap-4">
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Masukan Nomor Hp"
                    className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-2 focus:ring-primary focus:shadow-slate-300 focus:shadow-2xl"
                  />
                </label>
                <label className="flex flex-col text-base font-medium text-slate-500 gap-4">
                  Password:
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Masukan Password"
                    className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-2 focus:ring-primary focus:shadow-slate-300 focus:shadow-2xl"
                  />
                </label>
                <Button text="Register" />
              </form>
            </div>
            <p className="text-center mt-6 text-slate-400 font-inter">
              Already have account?
              <a href="/login" className="text-primary hover:text-yellow-300">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
