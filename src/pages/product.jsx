import React from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { Fragment } from "react";

const products = [
  {
    id : 1,
    name : "Pisang Keju",
    price : "Rp.15.000",
    image : "images/almond-banana-pancake.jpg",
    description :`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam,
          voluptatum eveniet harum quaerat eum maxime, est laboriosam
          perspiciatis eos deleniti nostrum natus asperiores quas repudiandae
          tenetur ipsam ipsum sapiente.`
  },
  {
    id : 2,
    name : "Pisang Coklat",
    price : "Rp.18.000",
    image : "images/almond-banana-pancake.jpg",
    description :`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam,
          voluptatum eveniet harum quaerat eum maxime, est laboriosam
          perspiciatis eos deleniti nostrum natus asperiores quas repudiandae
          tenetur ipsam ipsum sapiente.`
  },
  {
    id : 3,
    name : "Pisang Krezz",
    price : "Rp.13.000",
    image : "images/almond-banana-pancake.jpg",
    description :`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magnam,
          voluptatum eveniet harum quaerat eum maxime, est laboriosam
          perspiciatis eos deleniti nostrum natus asperiores quas repudiandae
          tenetur ipsam ipsum sapiente.`
  }
]

const email = localStorage.getItem('email');


const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href="/login"
  }

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">{email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>logout</Button>
      </div>
      <div className="flex justify-center py-5">
      {products.map((product)=>(
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
      </CardProduct>
      ))}
    </div>
    </Fragment>
  );
};

export default ProductsPage;
