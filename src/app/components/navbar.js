import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-sky-900 text-white p-4 w-full">
      <div className="w-full h-full container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold ml-12 cursor-pointer">SkinCare</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/signIn" className="hover:text-gray-400">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/signUp" className="hover:text-gray-400">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
