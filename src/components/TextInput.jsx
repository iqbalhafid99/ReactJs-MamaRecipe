import React from "react";

const TextInput = (props) => {
  return (
    <>
      <p className="text-base font-medium text-slate-500 mb-3 mt-5">
        {props.text}
      </p>
      <input
        type="text"
        placeholder={props.placeholder}
        className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:ring-2 focus:ring-primary focus:shadow-slate-300 focus:shadow-2xl"
        onChange={props.onChange}
      />
    </>
  );
};

export default TextInput;
