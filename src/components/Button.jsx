import React from "react";
// import { useNavigate } from "react-router-dom";

const Button = (props) => {
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(props.path);
  // };
  return (
    <button
      className="font-semibold rounded-md font-inter text-white mt-10 px-28 py-2.5 bg-primary hover:bg-yellow-300 hover:shadow-xl transition duration-300"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
