import React, { useRef, useState } from "react";

const ImageUploadForm = (props) => {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col justify-center">
      <button
        className="text-2xl font-medium text-isikomen mt-9 hover:text-black"
        onClick={handleButtonClick}
        onChange={props.onChange}
      >
        Add Photo
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {selectedImage && (
        <div>
          <img
            className=" mt-[20px] max-h-[400px] w-[300px] h-auto"
            src={selectedImage}
            alt="Selected"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploadForm;
