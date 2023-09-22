import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Cart = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(50);
  }, []);

  return (
    <>
      <div>Cart</div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        aut optio deleniti vel est doloribus sequi aliquam, ipsa qui animi quam
        quos! At iusto aliquam earum quae corporis fugiat amet?
      </p>
      <ul>
        <Link to={"/"}>Home</Link>
      </ul>
    </>
  );
};

export default Cart;
