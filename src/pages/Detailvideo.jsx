import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Detailvideo = () => {
  const params = useParams();
  const { id } = params;
  const [videoData, setVideoData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/food/${id}`
      );
      setVideoData(response.data.payload.data);
      console.log(response.data.payload.data);
    } catch (err) {
      console.log("ini gagal");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.title = "Add Recipe";
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        {/* Konten Utama */}
        <div className="w-full lg:w-3/4 mt-48 ml-52">
          {/* isi konten utama  */}

          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/vp3pdu2_aLE"
            title="RESEP KOLAK PISANG KOLANG KALING | CARA MEMBUAT KOLAK PISANG  | Ide Jualan Bulan Puasa 2023"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <div className="mt-10">
            <Link className="font-medium text-4xl">Kolak Pisang</Link>
            <p className="text-bulan font-medium text-2xl mt-3">3 months ago</p>
          </div>
        </div>
        {/* Konten Aside */}
      </div>
      <div className="absolute flex top-0">
        <div className="w-17 h-[150vh] bg-primary" />
      </div>

      <div className="mt-[307px]">
        <Footer />
      </div>
    </div>
  );
};

export default Detailvideo;
