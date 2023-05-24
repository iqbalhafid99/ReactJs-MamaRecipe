import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Add Recipe";
  }, []);

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    const imageUrl = URL.createObjectURL(selectedImage);
    setPreviewImage(imageUrl);
  };

  // const handleSubmit = () => {
  //   const recipeData = {
  //     id: id,
  //     nama_resep: title,
  //     resep: ingredients,
  //     video: video,
  //     image: image,
  //   };

  //   axios
  //     .post("http://localhost:3000/insert", recipeData)
  //     .then((response) => {
  //       console.log("Data berhasil diupload:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Terjadi kesalahan:", error);
  //     });
  // };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("nama_resep", title);
    formData.append("resep", ingredients);
    formData.append("video", video);
    formData.append("image", image);

    const recipeData = {
      nama_resep: title,
      resep: ingredients,
      video: video,
    };

    formData.append("data", JSON.stringify(recipeData));

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/insert`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Data berhasil diupload:", response.data);
        alert("Resep berhasil di tambahkan");

        navigate("/");
        // Lakukan tindakan lain setelah berhasil mengupload data
      })
      .catch((error) => {
        console.error("Terjadi kesalahan:", error);
        // Handle kesalahan jika terjadi
      });
  };

  return (
    <div>
      <Navbar />

      <section className="flex flex-col justify-center items-center mt-35">
        <div className="w-256 h-96 rounded-2xl bg-komen flex flex-col items-center justify-center">
          <div>
            {previewImage && (
              <img
                className=" mt-[20px] max-h-[400px] w-[300px] h-auto"
                src={previewImage}
                alt="Selected"
              />
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        <input
          type="text"
          placeholder="Title"
          className="my-10 py-9 pl-10 pr-[900px] rounded-2xl text-isikomen bg-komen text-2xl font-medium placeholder:text-isikomen placeholder:text-2xl placeholder:font-medium"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <div className="mb-10">
          <textarea
            name="ingredients"
            id="ingredients"
            cols={97}
            rows={12}
            className="placeholder:text-isikomen bg-komen rounded-2xl text-2xl font-medium text-isikomen pl-10 pt-10"
            placeholder="Ingredients"
            value={ingredients}
            onChange={(event) => setIngredients(event.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Video"
          className="py-9 pl-10 pr-[900px] rounded-2xl text-isikomen bg-komen text-2xl font-medium placeholder:text-isikomen placeholder:text-2xl placeholder:font-medium"
          value={video}
          onChange={(event) => setVideo(event.target.value)}
        />
        <button
          className="mt-22 py-6 px-48 bg-primary rounded-lg block text-white text-base font-medium hover:bg-yellow-300 hover:shadow-xl transition duration-300"
          onClick={handleSubmit}
        >
          Post
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default AddRecipe;
