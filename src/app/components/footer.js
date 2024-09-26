import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">SkinCare</h2>
          <p className="mt-3 text-gray-600">
            Dedicated to providing the best skin care products to help you achieve healthy, glowing skin.
          </p>
          <p className="mt-2 text-gray-600">© {new Date().getFullYear()} SkinCare. All Rights Reserved.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 ml-40">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900 ml-40">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 ml-40">Products</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 ml-40">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 ml-40">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 ml-40">Follow Us</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900 ml-40">Facebook</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 ml-40">Instagram</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 ml-40">Twitter</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900 ml-40">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
