import { Pagination, PaginationItem, Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../components/Layouts/Products/Product";
import { clearError, getProduct } from "../../Redux/actions/productAction";
import "./Products.scss";
import ProductSidebar from "./ProductSidebar";
import ProductSkeleton from "../../components/Layouts/Products/ProductSkeleton";
import MetaData from "../../components/Layouts/MetaData";
import { toast } from "react-toastify";

const ProductPage = () => {
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState();
  const [ratings, setRatings] = useState();
  const [notFound, setNotFound] = useState(false);
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const {
    products,
    loading,
    error,
    productCount,
    resultPerPage,
    filteredProductCount,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(keyword, page, price, category, ratings));
  }, [dispatch, keyword, page, price, category, ratings]);
  return (
    <>
      <MetaData title={"Products"} />
      <section id="productPage">
        <div className="products_heading">
          <h1> Products</h1>
        </div>
        <div className="container">
          <ProductSidebar
            price={price}
            setPrice={setPrice}
            category={category}
            setCategory={setCategory}
            ratings={ratings}
            setRatings={setRatings}
          />

          <div className="products_grid">
            <ProductSkeleton loading={loading} />

            {!loading &&  products?.length === 0 && (
              <div className="products_not_found">
                <h1>Sorry Product not found</h1>
              </div>
            )}

            {products &&
              products?.map((product, index) => (
                <>
                  <Product key={index} product={product} />
                </>
              ))}
          </div>
        </div>

        <div className="products_pagination">
          {resultPerPage < filteredProductCount && (
            <Pagination
              count={Number(
                ((filteredProductCount + 4) / resultPerPage).toFixed()
              )}
              page={page}
              onChange={(e, value) => {
                setPage(value);
              }}
              // count={resultPerPage}
              productCount={productCount}
              variant="outlined"
              shape="rounded"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default ProductPage;
