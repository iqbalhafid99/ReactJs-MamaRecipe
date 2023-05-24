import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import ForgotPassword from "../pages/ForgotPassword";
import AddRecipe from "../pages/AddRecipe";
import Profile from "../pages/Profile";
import DetailRecipe from "../pages/DetailRecipe";
import Detailvideo from "../pages/Detailvideo";
import GetParams from "../components/GetParams";
import GetParamsID from "../components/GetParamsID";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Coba from "../pages/Coba";
import CobaResep from "../pages/CobaResep";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

const route = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<LandingPage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="/detail-recipe/:id" element={<DetailRecipe />} />
          <Route path="/detail-video" element={<Detailvideo />} />
          <Route path="/params" element={<GetParams />} />
          <Route path="/params/:id" element={<GetParamsID />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coba" element={<Coba />} />
          <Route path="/resep" element={<CobaResep />} />
        </Route>

        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>

        <Route path="/login">
          <Route index element={<Login />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default route;
