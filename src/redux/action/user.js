// import React from "react";
import axios from "axios";

export const getList = () => {
  return {
    type: "GET_LIST_USER",
    payload: axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
    }),
  };
};
