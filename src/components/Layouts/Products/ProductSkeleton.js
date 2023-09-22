import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Products.scss";
const ProductSkeleton = ({ loading, error }) => {
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth < 400) {
  //         setArray([1, 2, 3, 4]);
  //       } else {
  //         setArray([1, 2, 3, 4, 5, 6, 7, 8]);
  //       }
  //     };

  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  return (
    <>
      {loading &&
        array.map((item, index) => {
          return (
            <>
              <div className="product_skeleton" key={index}>
                <div className="product_image">
                  <Skeleton
                    variant="rectangular"
                    className="skeleton"
                    style={{
                      maxWidth: "300px",
                      width: "100%",
                      height: "260px",
                    }}
                  />
                </div>
                <h1 className="product_title">
                  <Skeleton
                    variant="text"
                    className="skeleton"
                    style={{
                      maxWidth: "300px",
                      width: "100%",
                      height: "30px",
                    }}
                  />
                </h1>

                <div className="product_price">
                  <Skeleton
                    variant="text"
                    className="skeleton"
                    style={{
                      maxWidth: "150px",
                      width: "300px",
                      height: "26px",
                    }}
                  />
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};

export default ProductSkeleton;
