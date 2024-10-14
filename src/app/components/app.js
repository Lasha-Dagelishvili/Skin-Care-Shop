/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Screen Clean Spray",
      price: "$12.99",
      img: "/pictures/image1.jpeg",
    },
    {
      id: 2,
      name: "Microfiber Cloth",
      price: "$7.99",
      img: "/pictures/image1.jpeg",
    },
    {
      id: 3,
      name: "Screen Protector",
      price: "$15.99",
      img: "/pictures/image1.jpeg",
    },
    {
      id: 4,
      name: "Anti-Glare Film",
      price: "$9.99",
      img: "/pictures/image1.jpeg",
    },
    {
      id: 5,
      name: "Screen Clean Spray",
      price: "$12.99",
      img: "/pictures/image1.jpeg",
    },
    {
      id: 6,
      name: "Microfiber Cloth",
      price: "$7.99",
      img: "/pictures/image1.jpeg",
    },
    {
      id: 7,
      name: "Screen Protector",
      price: "$15.99",
      img: "/pictures/image1.jpeg",
    },
    {
      id: 8,
      name: "Anti-Glare Film",
      price: "$9.99",
      img: "/pictures/image1.jpeg",
    },
  ];

  return (
    <div className="pb-24 pt-16 bg-gray-300 select-none">
      <h2 className="text-3xl font-semibold text-center text-black mb-6">
        Our Products
      </h2>
      <Link
        href="/"
        id="products"
        className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-28 cursor-default"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl text-gray-800 font-semibold">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-2">{product.price}</p>
          </div>
        ))}
      </Link>
    </div>
  );
};

export default App;
