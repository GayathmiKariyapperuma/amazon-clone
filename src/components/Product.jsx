import React from "react";
import Book from "./Book";
import Mixer from "./Mixer";
import Tracker from "./Tracker";
import Echo from "./Echo";
import Ipad from "./Ipad";
import Monitor from "./Monitor";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <Mixer />
        <Tracker />
        <Echo />
        <Ipad />
        <Monitor />
      </div>
    </div>
  );
}

export default Product;
