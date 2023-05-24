import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Detailvideo = () => {
  const [videoData, setVideoData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/food/`
      );
      setVideoData(response.data.payload.data);
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
          {videoData && (
            // <iframe
            //   className="video w-[90%] h-[70vh]"
            //   title="Youtube player"
            //   src={videoData[1].video}
            // ></iframe>

            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/Y75l0gNggrA"
              title="PITCH INVASION: Barcelona players flee as Espanyol fans storm the pitch"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          )}
          <div className="mt-10">
            <Link className="font-medium text-4xl">
              Beef Steak with Curry Sauce - [Step 4] <br />
              Cut the condiment and then mix it
            </Link>
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
