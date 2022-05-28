import React from "react";
import ProductPage from "../page/productPage";

import "./Home.css";
function Home() {
  return (
    <div className="home">
      <h1>All Products</h1>
      <ProductPage />
    </div>
  );
}

export default Home;
