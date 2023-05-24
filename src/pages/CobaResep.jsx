import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
const App = () => {
  const [dataResep, setDataResep] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/food/`)
        .then((response) => {
          console.log(response.data.payload.data);
          setDataResep(response.data.payload.data);
        })
        .catch((err) => {
          console.log("ini gagal");
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Aplikasi Resep</h1>
      <RecipeCard dataResep={dataResep} />
    </div>
  );
};

export default App;
