import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // router
  const navigate = useNavigate();

  //   toggle navigation
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const toggleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };

  return (
    <div>
      <header className="md:block hidden">
        <nav className="flex justify-between items-center w-[85%] mx-auto mt-[40px]">
          <div>
            <ul className="flex items-center gap-[100px] text-scondary text-lg font-medium">
              <li>
                <p
                  className="hover:text-blue-500 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </p>
              </li>
              <li>
                <p
                  className="hover:text-blue-500 cursor-pointer"
                  onClick={() => navigate("/add-recipe")}
                >
                  Add Recipe
                </p>
              </li>
              <li>
                <p
                  className="hover:text-blue-500 cursor-pointer"
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* navbar mobile */}
      <div
        className={`pl-4 pt-4 bg-slate-100 ${
          isMobileNavbarOpen ? "" : "hidden"
        } menuMobile`}
      >
        <nav className="list-none flex flex-col gap-4 font-medium">
          <li>
            <p className="text-scondary hover:font-bold hover:text-blue-500 hover:duration-300">
              Home
            </p>
          </li>
          <li>
            <p className="text-scondary hover:font-bold hover:text-blue-500 hover:duration-300">
              Add Recipe
            </p>
          </li>
          <li>
            <p className="text-scondary hover:font-bold hover:text-blue-500 hover:duration-300">
              Profile
            </p>
          </li>
        </nav>
        <div className="-ml-1 pb-4">
          <button className="bg-gradient-to-r from-primary to-amber-400 rounded-full mt-4 py-1 px-4 font-medium text-white hover:shadow-xl hover:text-scondary hover:duration-300">
            Login
          </button>
        </div>
      </div>
      <button
        onClick={toggleMobileNavbar}
        className="md:hidden buttonMobile cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 absolute top-0 right-0 mx-2 my-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
