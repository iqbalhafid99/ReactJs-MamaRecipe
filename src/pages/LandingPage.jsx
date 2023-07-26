import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserIcon from "../assets/images/Food Recipe/User icon.png";
import PopularImage from "../assets/images/Food Recipe/popular.png";
import RectangleImage from "../assets/images/Food Recipe/Rectangle.png";
import HiasanImage from "../assets/images/Food Recipe/hiasan.png";
import NewRecipeImage from "../assets/images/Food Recipe/new recipe.png";
import HeroImage from "../assets/images/Food Recipe/hero.png";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import ReactPaginate from "react-paginate";

const LandingPage = () => {
  const [sortType, setSortType] = useState("asc");

  const [foods, setFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchStatus, setSearchStatus] = useState("idle"); // idle | searching | success | error

  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 6; // Ubah sesuai dengan jumlah item yang ingin ditampilkan per halaman
  const pageCount = Math.ceil(foods.length / itemsPerPage);

  const displayFoods = foods
    .slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
    .map((food) => (
      <Link to={`/detail-recipe/${food.id}`} key={food.id}>
        <img
          src={`${process.env.REACT_APP_BACKEND_URL}/${food.image}`}
          alt=""
          className="md:w-[500px] md:h-[500px] w-[250px] h-[250px] md:mt-28 hover:shadow-2xl rounded-2xl"
        />
        <p className="md:-mt-20 text-center md:-ml-60 md:text-3xl text-2xl text-teks font-medium hover:text-primary">
          {food.nama_resep}
        </p>
      </Link>
    ));

  const handleSortTypeChange = () => {
    const newSortType = sortType === "asc" ? "desc" : "asc";
    setSortType(newSortType);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      return;
    }

    setSearchStatus("searching");

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/foods/search?query=${searchQuery}`
      );
      setFoods(response.data.payload.data);
      setSearchStatus("success");
    } catch (error) {
      console.log("Gagal melakukan pencarian", error);
      setSearchStatus("error");
    }
  };

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  // log out
  const handleLogout = () => {
    localStorage.clear();

    alert("Log out berhasil");
    navigate("/login");
  };

  const fetchData = async () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/food/`)
      .then((response) => {
        console.log(response.data.payload.data);
        const sortedData = response.data.payload.data.sort((a, b) => {
          if (sortType === "asc") {
            return a.nama_resep.localeCompare(b.nama_resep);
          } else {
            return b.nama_resep.localeCompare(a.nama_resep);
          }
        });
        setFoods(sortedData);
      })
      .catch((err) => {
        console.log("Gagal mengambil data");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="md:block hidden">
        <div>
          <ul className="flex justify-end items-center gap-[14px] mr-[150px] ">
            <li onClick={() => navigate("/profile")} className="cursor-pointer">
              <img src={UserIcon} alt="" />
            </li>
            <li
              onClick={handleLogout}
              className="cursor-pointer hover:text-white"
            >
              Logout
            </li>
          </ul>
        </div>
        <div className="absolute top-0 right-0 w-[514px] h-[1210px] bg-primary -z-1 ">
          <div className="mt-[40px]"></div>
        </div>
      </div>

      {/* Header */}
      <section className="mt-4 md:gap-72 flex flex-col gap-4 md:flex-row items-center justify-center">
        <div className="mt-8 text-scondary">
          <h1 className="font-medium md:text-left text-center text-4xl md:leading-normal md:text-7xl">
            Discover Recipe <br />
            &amp; Delicious Food
          </h1>
          <div className="md:block pt-8 hidden">
            <input
              type="text"
              placeholder="search restaurant, food"
              className="py-9 pl-20 pr-[350px] border font-normal text-gray-500 rounded-2xl bg-background text-lg placeholder:text-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />

            <Link onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 text-gray-300 -mt-[60px] ml-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="md:mt-28 flex flex-col items-center justify-center">
          <img
            src={HeroImage}
            alt=""
            className="w-[350px] h-[350px] md:w-auto md:h-auto"
          />
          <div className="pt-8 md:hidden">
            <input
              type="text"
              placeholder="search restaurant, food"
              className="py-2 px-16 border font-normal text-gray-500 rounded-xl bg-background text-lg placeholder:text-gray-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 text-gray-300 -mt-8 ml-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* popular for you */}
      <div className="mt-[350px]">
        <div className="flex items-center justify-between">
          {/* image */}
          <div className="container -mt-22">
            <div className="flex items-center">
              <div className="w-6 h-36 bg-primary ml-30" />
              <p className="text-5xl font-medium text-teks pl-8">
                Popular For You !
              </p>
            </div>
            <div className="mt-22 ml-30 relative">
              <img src={PopularImage} alt="" />
              <span className="absolute -bottom-17 left-64 -z-1">
                <img src={RectangleImage} alt="" />
              </span>
              <span className="absolute bottom-5 -left-28 -z-1">
                <img src={HiasanImage} alt="" />
              </span>
            </div>
          </div>
          {/* teks */}
          <div className="teks pt-56">
            <p className="text-5.5xl font-medium text-teks">
              Healthy Bone Broth Ramen (Quick &amp; Easy)
            </p>
            <div className="w-22 h-0.5 bg-primary mt-6" />
            <p className="mt-9 text-2xl">
              Quick + Easy Chicken Bone Broth Ramen- <br />
              Healthy chicken ramen in a hurry? That’s right!
            </p>
            <a href="detail-recipe">
              <button className="font-semibold rounded-md font-inter text-white mt-12 px-14 py-4 bg-primary hover:bg-yellow-300 hover:shadow-xl transition duration-300">
                Learn More
              </button>
            </a>
          </div>
        </div>
        {/* New Recipe */}
        <div className="mt-40 flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <div className="w-6 h-36 bg-primary ml-30" />
              <p className="text-5xl font-medium text-teks pl-8">New Recipe</p>
            </div>
            <div className="relative mt-44">
              <img src={NewRecipeImage} alt="" className="ml-30" />
              <div className="w-128 h-200 bg-primary absolute -top-20 -z-1" />
            </div>
          </div>
          {/* teks */}
          <div className="mr-30 pt-80">
            <p className="text-5.5xl font-medium text-teks">
              Healthy Bone Broth <br />
              Ramen (Quick &amp; Easy)
            </p>
            <div className="w-22 h-0.5 bg-primary mt-6" />
            <p className="mt-9 text-2xl">
              Quick + Easy Chicken Bone Broth Ramen- <br />
              Healthy chicken ramen in a hurry? That’s right!
            </p>
            <a href="detail-recipe">
              <button className="font-semibold rounded-md font-inter text-white mt-12 px-14 py-4 bg-primary hover:bg-yellow-300 hover:shadow-xl transition duration-300">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="pt-52">
          <div className="flex items-center">
            <div className="w-6 h-36 bg-primary ml-30" />
            <p className="text-5xl font-medium text-teks pl-8">All Recipe</p>
          </div>

          {/* content */}
          <div className="flex justify-center mt-10">
            <button className="text-primary" onClick={handleSortTypeChange}>
              {sortType === "desc" ? "Sort Descending" : "Sort Ascending"}
            </button>
          </div>
          <div className=" flex flex-wrap justify-center gap-10">
            {displayFoods}
            {searchStatus === "error" && (
              <p className="text-primary text-2xl font-bold">
                Tidak dapat melakukan pencarian. <br /> Silakan coba lagi.
              </p>
            )}

            {searchStatus === "success" && foods.length === 0 && (
              <p className="text-primary text-2xl font-bold">
                Resep tidak ditemukan.
              </p>
            )}
          </div>
          <div className="flex justify-center mt-28 ">
            <ReactPaginate
              className="flex gap-5 text-xl text-primary font-bold"
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
