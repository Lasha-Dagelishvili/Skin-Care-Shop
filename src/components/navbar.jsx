import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    profilePic: null,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState(false);
  const [newProfileData, setNewProfileData] = useState(user);
  const router = useRouter();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const loggedInUser = JSON.parse(localStorage.getItem("user"));
      if (loggedInUser) {
        setUser(loggedInUser);
        setIsLoggedIn(true);
      }
    }
  }, [isMounted]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ fullName: "", email: "", profilePic: null });
    setIsLoggedIn(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prevState) => !prevState);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  const handleProfileEdit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(newProfileData));
    setUser(newProfileData);
    setEditingProfile(false);
    setDropdownOpen(false);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setNewProfileData({ ...newProfileData, [name]: value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProfileData({ ...newProfileData, profilePic: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-sky-900 text-white p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold ml-12 cursor-pointer">
          SkinCare
        </Link>
        <ul className="flex space-x-6">
          {isLoggedIn ? (
            <li className="relative">
              <div
                className="cursor-pointer flex items-center"
                onClick={toggleDropdown}
              >
                {user.profilePic ? (
                  <img
                    src={user.profilePic}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <CgProfile className="w-8 h-8" />
                )}
                <span className="ml-2">{user.fullName}</span>
              </div>
              {dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg p-4 z-10"
                >
                  {!editingProfile ? (
                    <>
                      <p className="font-bold">{user.fullName}</p>
                      <p className="text-gray-500">{user.email}</p>
                      <button
                        className="mt-2 w-full bg-blue-600 text-white py-2 rounded"
                        onClick={() => setEditingProfile(true)}
                      >
                        Edit Profile
                      </button>
                      <button
                        className="mt-2 w-full bg-red-600 text-white py-2 rounded"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <form onSubmit={handleProfileEdit}>
                      <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={newProfileData.fullName}
                          onChange={handleProfileChange}
                          className="w-full px-3 py-2 border rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={newProfileData.email}
                          onChange={handleProfileChange}
                          className="w-full px-3 py-2 border rounded"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">
                          Profile Picture
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleProfilePictureChange}
                          className="w-full px-3 py-2"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        className="mt-2 w-full bg-gray-600 text-white py-2 rounded"
                        onClick={() => setEditingProfile(false)}
                      >
                        Cancel
                      </button>
                    </form>
                  )}
                </div>
              )}
            </li>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
