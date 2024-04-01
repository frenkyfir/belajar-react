import React from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="images\almond-banana-pancake.jpg" />
        <CardProduct.Body title="Pisang Coklat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam,
          voluptatum eveniet harum quaerat eum maxime, est laboriosam
          perspiciatis eos deleniti nostrum natus asperiores quas repudiandae
          tenetur ipsam ipsum sapiente.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.20.000,00" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="images\almond-banana-pancake.jpg" />
        <CardProduct.Body title="Pisang Coklat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam,
          voluptatum eveniet harum quaerat eum maxime, est laboriosam
          perspiciatis eos deleniti nostrum natus asperiores quas repudiandae
          tenetur ipsam ipsum sapiente.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.20.000,00" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
