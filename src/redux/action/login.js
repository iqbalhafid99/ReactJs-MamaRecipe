import axios from "axios";
// import { useNavigate } from "react-router-dom";

export const login = (form, handleSuccess) => {
  return {
    type: "LOGIN",
    payload: new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
        .then((response) => {
          console.log(response);
          handleSuccess(response.data);
          resolve(response.data);
        })
        .catch((err) => {
          console.log("ini gagal");
        });
    }),
  };
};
