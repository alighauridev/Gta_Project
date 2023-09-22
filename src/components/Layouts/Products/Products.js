import React, { useEffect, useState } from "react";
import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/actions/productAction";
import Product from "./Product";
import { Backdrop, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackdropLoading from "../BackdropLoading";
import { toast } from "react-toastify";
import ProductSkeleton from "./ProductSkeleton";

const Products = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading, error, products, productCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(dispatch);

  return (
    <>
      <section id="products">
        <div className="container">
          <div className="products_heading">
            <h1>Latest Products</h1>
          </div>

          <div className="products_grid">
            <ProductSkeleton loading={loading} error={error} />
            {products &&
              products.map((product, index) => (
                <>
                  <Product key={index} product={product} />
                </>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
