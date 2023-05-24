import React from "react";
import { useSearchParams } from "react-router-dom";

const GetParams = () => {
  const [queryParams] = useSearchParams();
  const search = queryParams.get("search");
  const sort = queryParams.get("sort");
  const type = queryParams.get("type");
  return (
    <div>
      <h1>
        query param {search} {sort} {type}
      </h1>
      
    </div>
  );
};

export default GetParams;
