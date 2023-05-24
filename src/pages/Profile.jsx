import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PenImage from "../assets/images/profile/pen.png";
import ProfileImage from "../assets/images/profile/profil.png";
import ResepImage1 from "../assets/images/profile/resep1.png";
import ResepImage2 from "../assets/images/profile/resep2.png";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Profile = () => {
  const [isImageShow, setIsImageShow] = useState(false);
  const [changeProfile, setChangeProfile] = useState(false);
  const [username, setUsername] = useState(""); // Tambahkan state untuk menyimpan nama pengguna

  useEffect(() => {
    // Ambil JWT dari localStorage
    const jwtToken = localStorage.getItem("token");

    // Hapus "Bearer " dari JWT jika ada
    const token = jwtToken ? jwtToken.replace("Bearer ", "") : "";

    // Dekode token dan ambil nama pengguna dari payload JWT
    if (token) {
      const decodedToken = jwt_decode(token);
      console.log(decodedToken.name); // Cetak properti 'name' di konsol
      const username = decodedToken.name;
      setUsername(username);
    }
  }, []);

  const toggleImageShow = () => {
    setIsImageShow(!isImageShow);
  };

  const toggleChangeProfile = () => {
    setChangeProfile(!changeProfile);
  };

  return (
    <div>
      <Navbar />

      <header>
        <div className="flex flex-col items-center mt-40">
          <div className="flex">
            <img src={ProfileImage} alt="" />
            <button onClick={toggleChangeProfile}>
              <img src={PenImage} alt="" className="absolute" />
            </button>
          </div>
          <div
            className={`recipeImage flex flex-col ${
              changeProfile ? "" : "hidden"
            }`}
          >
            <Link>
              <button className="mt-8 text-sm font-medium w-80 h-10 bg-komen rounded-t-2xl border-b text-isikomen hover:text-black">
                Change Photo Profile
              </button>
            </Link>
            <Link to="">
              <button className="w-80 text-sm font-medium h-10 bg-komen rounded-b-2xl border-t text-isikomen hover:text-black">
                Change Password
              </button>
            </Link>
          </div>
          <h1 className="mt-10 text-2xl font-medium">{username}</h1>
          {/* Ganti nama statis dengan state username */}
          <div className="w-80 h-0.5 bg-gray-100" />
        </div>
      </header>

      <section className="mt-24">
        <div>
          <ul className="flex text-isikomen font-medium text-2xl px-28 py-11">
            <li className="pr-28">
              <button
                onClick={toggleImageShow}
                className="hover:font-bold hover:text-black"
              >
                My Recipe
              </button>
            </li>
            <li className="pr-28">
              <button
                onClick={toggleImageShow}
                className="hover:font-bold hover:text-black"
              >
                Saved Recipe
              </button>
            </li>
            <li className="pr-28">
              <button
                onClick={toggleImageShow}
                className="hover:font-bold hover:text-black"
              >
                Liked Recipe
              </button>
            </li>
          </ul>
        </div>
        <div className="w-full h-0.5 bg-gray-100" />
        <div className={`recipeImage ml-30 ${isImageShow ? "" : "hidden"}`}>
          <div className="mt-14 flex flex-wrap">
            <button className>
              <img src={ResepImage1} alt="" />
              <p className="-mt-20 text-3xl text-white font-medium hover:text-teks">
                Bomb <br />
                Chicken
              </p>
            </button>
            <button className="mx-18">
              <img src={ResepImage2} alt="" />
              <p className="-mt-20 text-3xl text-white font-medium hover:text-teks">
                Bananas <br />
                Pancakes
              </p>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Profile;
