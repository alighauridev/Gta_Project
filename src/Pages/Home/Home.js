import React, { useEffect } from "react";
import Banner from "../../components/Layouts/Banner/Banner";
import Footer from "../../components/Layouts/Footer/Footer";
import { Link } from "react-router-dom";
import MetaData from "../../components/Layouts/MetaData";
import Product from "../../components/Layouts/Products/Product";
import bag from "../../assets/images/bag.png";
import { getProduct } from "../../Redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import Products from "../../components/Layouts/Products/Products";
const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <MetaData title={"Home"} />
      <main>
        <Banner />
        <Products />
      </main>
    </>
  );
};

export default Home;
