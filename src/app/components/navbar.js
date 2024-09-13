import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">  
      <div className="w-full h-full container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-12 cursor-pointer">SkinCare</h1>
        <ul className="flex space-x-6">
          <li><Link href="/signin" className="hover:text-gray-400">SignIn</Link></li>
          <li><Link href="/signup" className="hover:text-gray-400">SignUp</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
