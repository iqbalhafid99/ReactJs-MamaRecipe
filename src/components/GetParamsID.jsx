import React from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";

const GetParams = () => {
  const { id } = useParams();

  return (
    <div>
      {id}
      <br />
      <Button text="klik saya" path="/params" />
    </div>
  );
};

export default GetParams;
