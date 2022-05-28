import React, { useEffect, useState } from "react";
import { getAllCategories } from "../api/category";

import "./productPage.css";

const products = [
  "Watch ",
  "Mobile",
  "Calculator",
  "Mouse",
  "Keyword",
  "Earphone",
];



function ProductPage() {

  const [categories, setCategories] = useState();


  useEffect(() => {
    const init =  async () => {
       const result = await getAllCategories();
       setCategories(result.data);
       console.log(result.data);
     };
   
     init();
   }, []);
  return (
    <div className="products">
      {categories?.map((category, index) => (
        <div key={index} className="product_item">
          <h3 className="item">{category.name}</h3>
          <button onClick={() => addToCart()}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;

function addToCart() {
  console.log("ADD To CART");
}
