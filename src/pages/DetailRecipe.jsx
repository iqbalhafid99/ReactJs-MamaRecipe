import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SaveImage from "../assets/images/Detail/save.png";
import LikeImage from "../assets/images/Detail/like.png";
import PlayImage from "../assets/images/Detail/play.png";
import HeaderImage from "../assets/images/Detail/headerDetail.png";
import ProfileImage from "../assets/images/Detail/ayu.png";

const DetailRecipe = () => {
  useEffect(() => {
    document.title = "Add Recipe";
  }, []);
  return (
    <div>
      <Navbar />

      <div>
        <header className="mt-40 flex flex-col items-center">
          <h1 className="text-7xl font-medium text-scondary mb-17">
            Loream Sandwich
          </h1>
          <div>
            <img src={HeaderImage} alt="" />
            <span className="flex justify-end -mt-20 mr-10">
              <img src={SaveImage} alt="" className="mr-4 cursor-pointer" />

              <img src={LikeImage} alt="" className="cursor-pointer" />
            </span>
          </div>
        </header>
        <article className="ml-80 mt-30">
          <div className="ingredients">
            <h1 className="text-5xl text-teks font-medium">Ingredients</h1>
            <ul className="mt-11 text-4xl font-light">
              <li>
                - 2 eggs <br />
                - 2 tbsp mayonnaise <br />
                - 3 slices bread <br />
                - a little butter <br />
                - ⅓ carton of cress <br />
                - 2-3 slices of tomato or a lettuce leaf <br />
                and a slice of ham or cheese <br />- crisps , to serve
              </li>
            </ul>
          </div>
          <div className="video mt-18">
            <h1 className="text-5xl text-teks font-medium">Video Step</h1>
            <div className="tombol mt-11">
              <a href="detail-video">
                <button className="py-8 px-52 bg-primary rounded-2xl block mb-12 hover:bg-yellow-300 hover:shadow-xl transition duration-300">
                  <img src={PlayImage} alt="" />
                </button>
              </a>
              <a href="detail-video">
                <button className="py-8 px-52 bg-primary rounded-2xl block mb-12 hover:bg-yellow-300 hover:shadow-xl transition duration-300">
                  <img src={PlayImage} alt="" />
                </button>
              </a>
              <a href="detail-video">
                <button className="py-8 px-52 bg-primary rounded-2xl block mb-12 hover:bg-yellow-300 hover:shadow-xl transition duration-300">
                  <img src={PlayImage} alt="" />
                </button>
              </a>
              <a href="detail-video">
                <button className="py-8 px-52 bg-primary rounded-2xl block mb-12 hover:bg-yellow-300 hover:shadow-xl transition duration-300">
                  <img src={PlayImage} alt="" />
                </button>
              </a>
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

      <Footer />
    </div>
  );
};

export default DetailRecipe;
