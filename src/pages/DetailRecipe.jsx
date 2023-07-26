import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlayImage from "../assets/images/Detail/play.png";
import ProfileImage from "../assets/images/Detail/ayu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const DetailRecipe = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [foods, setFoods] = useState([]);

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/destroy/${id}`)
      .then((response) => {
        console.log(response);
        alert("Delete success!");
        navigate("/");
      })
      .catch((err) => {
        // Tambahkan logika tambahan yang diinginkan jika penghapusan gagal
        console.log(err.message + " ini gagal");
      });
  };

  const fetchData = async () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/food/${id}`)
      .then((response) => {
        console.log(response.data.payload.data);
        setFoods(response.data.payload.data);
      })
      .catch((err) => {
        console.log("ini gagal");
      });
  };

  useEffect(() => {
    fetchData();
    document.title = "Add Recipe";
  }, []);
  return (
    <div>
      <Navbar />
      {foods.map((food) => (
        <div>
          <header className="mt-40 flex flex-col items-center">
            <h1 className="text-7xl font-medium text-scondary mb-17">
              {food.nama_resep}
            </h1>
            <div>
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/${food.image}`}
                alt=""
                className="max-w-full h-[700px] rounded-2xl"
              />
              <span className="flex justify-end gap-5 -mt-20 mr-10">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="w-[40px] h-[40px] text-primary cursor-pointer"
                  onClick={handleDelete}
                />
                <Link to={`/update/${food.id}`}>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="w-[40px] h-[40px] text-primary cursor-pointer"
                  />
                </Link>
              </span>
            </div>
          </header>
          <article className="ml-80 mt-30">
            <div className="ingredients">
              <h1 className="text-5xl text-teks font-medium">Ingredients</h1>
              <ul className="mt-11 text-4xl font-light">
                <li>{food.resep}</li>
              </ul>
            </div>
            <div className="video mt-18">
              <h1 className="text-5xl text-teks font-medium">Video Step</h1>
              <div className="tombol mt-11">
                <Link to={`/detail-video/${food.id}`}>
                  <button className="py-8 px-52 bg-primary rounded-2xl block mb-12 hover:bg-yellow-300 hover:shadow-xl transition duration-300">
                    <img src={PlayImage} alt="" />
                  </button>
                </Link>

                <div className="comments mt-36 ml-8">
                  <textarea
                    name="comments"
                    id="comments"
                    cols={105}
                    rows={12}
                    className="bg-komen rounded-2xl text-2xl font-medium text-isikomen"
                    defaultValue={"        \n        Comment : \n        "}
                  />
                  <div className="flex items-center justify-center mt-10 -ml-35">
                    <button className="py-6 px-48 bg-primary rounded-lg block mb-12 text-white text-base font-medium hover:bg-yellow-300 hover:shadow-xl transition duration-300">
                      Send
                    </button>
                  </div>
                </div>
                <div className="coloumn mt-12">
                  <h1 className="text-5xl text-teks font-medium">Comment</h1>
                  <div className="isiKomen flex mt-11">
                    <img src={ProfileImage} alt="" />
                    <div className="ml-10">
                      <h1 className="text-2xl font-medium">Ayudia</h1>
                      <p className="text-2xl font-normal">
                        Nice recipe. simple and delicious, thankyou
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default DetailRecipe;
