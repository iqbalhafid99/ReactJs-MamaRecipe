import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const MainComponent = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Ambil JWT dari localStorage
    const jwtToken = localStorage.getItem("token");

    // Hapus "Bearer " dari JWT jika ada
    const token = jwtToken ? jwtToken.replace("Bearer ", "") : "";

    // Dekode token dan ambil nama pengguna dari payload JWT
    if (token) {
      const decodedToken = jwt_decode(token);
      console.log(decodedToken); // Cetak properti 'name' di konsol
      const { username } = decodedToken;
      setUserName(username);
    }
  }, []);

  return (
    <div>
      {userName ? (
        <h1>Selamat datang, {userName}!</h1>
      ) : (
        <h1>Silakan login terlebih dahulu.</h1>
      )}
      {/* Tampilkan konten lainnya */}
    </div>
  );
};

export default MainComponent;
