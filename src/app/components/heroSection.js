import React from 'react';

const App = () => {
  return (
    <div>
      <ProductSection />
    </div>
  );
};


const ProductSection = () => {
  const products = [
    { id: 1, name: "Screen Clean Spray", price: "$12.99", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Microfiber Cloth", price: "$7.99", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Screen Protector", price: "$15.99", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Anti-Glare Film", price: "$9.99", img: "https://via.placeholder.com/150" },
    { id: 1, name: "Screen Clean Spray", price: "$12.99", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Microfiber Cloth", price: "$7.99", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Screen Protector", price: "$15.99", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Anti-Glare Film", price: "$9.99", img: "https://via.placeholder.com/150" },
    { id: 1, name: "Screen Clean Spray", price: "$12.99", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Microfiber Cloth", price: "$7.99", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Screen Protector", price: "$15.99", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Anti-Glare Film", price: "$9.99", img: "https://via.placeholder.com/150" },
  ];

  return (
    <div id="products" className="pb-24 pt-10 bg-pink-100 ">
      <h2 className="text-3xl font-semibold text-center mb-6 ">Our Products</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-28">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 text-center cursor-pointer">
            <img src={product.img} alt={product.name} className="w-24 h-24 mx-auto mb-4 " />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
