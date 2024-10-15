"use client";

import Link from "next/link";
import { useState } from "react";

export async function getServerSideProps(context) {
  const { page = 1 } = context.query;
  const res = await fetch(
    `https://example.com/api/getProduct?page=${page}&limit=10`
  );
  const data = await res.json();

  return {
    props: {
      initialProducts: data.products,
      currentPage: data.currentPage,
      totalPages: data.totalPages,
    },
  };
}

const App = ({ initialProducts, currentPage, totalPages }) => {
  const [products, setProducts] = useState(initialProducts || []);

  const handlePageChange = async (page) => {
    const res = await fetch(`/api/getProduct?page=${page}&limit=10`);
    const data = await res.json();
    setProducts(data.products);
  };

  return (
    <>
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
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default App;
