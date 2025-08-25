import React from "react";
import MensProduct from "../components/MensProduct";
import KidsProduct from "../components/KidsProduct";
import WomensProduct from "../components/WomensProduct";

const ProductListing = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div>
        <h1>Mens Product</h1>
        <MensProduct />
      </div>
      <div>
        <h1>Women's Product</h1>
        <WomensProduct />
      </div>
      <div>
        <h1>Kids Product</h1>
        <KidsProduct />
      </div>
    </div>
  );
};

export default ProductListing;
