import React from "react";
// import path from "C:/Users/Iqbal/OneDrive/Desktop/backend/public";

const DaftarResep = ({ dataResep }) => {
  console.log(dataResep);
  return (
    <div>
      <h1>Daftar Resep</h1>
      {dataResep.map((item, index) => (
        <div key={index}>
          <h2>{item.nama_resep}</h2>
          <p>{item.resep}</p>
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
            alt={item.nama_resep}
            className="w-[300px] h-[300px]"
          ></img>
        </div>
      ))}
    </div>
  );
};

export default DaftarResep;
