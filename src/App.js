import React, { useEffect, useState } from "react";
import {
  Route,
  Router,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import LodingBar from "./components/Layouts/LodingBar";
import Navigation from "./components/Layouts/Navigatiion/Navigation";
import Footer from "./components/Layouts/Footer/Footer";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductDetials from "./Pages/ProductDetials/ProductDetials";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Login from "./components/User/Login";
import SignUp from "./components/User/SignUp";
import { useDispatch } from "react-redux";
import { LoadUser } from "./Redux/actions/userAction";
import Profile from "./components/User/Profile";
import UpdateProfile from "./components/User/UpdateProfile";
import ProtectedRoute from "./components/Route/ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();

  dispatch(LoadUser());
  return (
    <>
      <LodingBar />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetials />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/products/:keyword" element={<ProductPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />

        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* <ProtectedRoute exact path={"/account"} Component={<Profile />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
