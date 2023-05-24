import React from "react";

function Checkbox() {
  return (
    <>
      <input
        type="checkbox"
        id="myCheckbox"
        name="myCheckbox"
        className="form-checkbox checked:bg-primary mt-6 accent-primary"
      />
      <label
        htmlFor="myCheckbox"
        className="inline-flex ml-2 text-gray-500 font-medium mt-6"
      >
        I agree to terms &amp; conditions
      </label>
    </>
  );
}

export default Checkbox;
