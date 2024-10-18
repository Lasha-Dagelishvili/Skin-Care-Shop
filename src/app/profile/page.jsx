"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";

export default function Profile() {
  const [productName, SetProductName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);

  const [editMode, setEditMode] = useState(false);

  const router = useRouter();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      setFilePreview(fileURL);
    }
  };

  const handleProfilePicChange = (e) => {
    const selectedProfilePic = e.target.files[0];
    setProfilePic(selectedProfilePic);
    if (selectedProfilePic) {
      const profilePicURL = URL.createObjectURL(selectedProfilePic);
      setProfilePicPreview(profilePicURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("file", file);
    formData.append("price", price);
    formData.append("productName", productName);

    try {
      const res = await fetch("/api/createProduct", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Upload successful!");
      } else {
        setMessage("Upload failed: " + data.message);
      }
    } catch (error) {
      setMessage("Upload failed: " + error.message);
    }
  };

  const handleCategoryClick = (newCategory) => {
    router.push(`/search?category=${encodeURIComponent(newCategory)}`);
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const handleSaveChanges = () => {
    setEditMode(false);
  };

  return (
    <>
      <Navbar handleCategoryClick={handleCategoryClick} />
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center w-full h-auto">
          <div className="w-full max-w-7xl min-h-auto p-8 mt-10 space-y-6 space-x-20 rounded-lg bg-gray-100 shadow-lg">
            <h1 className="text-2xl font-bold text-center">Profile</h1>
            <FaEdit
              className="cursor-pointer text-gray-600"
              onClick={toggleEditMode}
            />

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 border-4 border-dashed border-gray-300 flex items-center justify-center rounded-full overflow-hidden">
                <label className="bg-white cursor-pointer w-full h-full flex items-center justify-center relative">
                  {profilePicPreview ? (
                    <img
                      src={profilePicPreview}
                      alt="Profile Picture"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-gray-500">Upload Profile Picture</span>
                  )}
                  {editMode && (
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleProfilePicChange}
                      accept="image/*"
                    />
                  )}
                </label>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {editMode ? (
                <>
                  <div>
                    <strong>Name:</strong>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="ml-2 p-1 border rounded"
                    />
                  </div>
                  <div>
                    <strong>Lastname:</strong>
                    <input
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="ml-2 p-1 border rounded"
                    />
                  </div>
                  <div>
                    <strong>Location:</strong>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="ml-2 p-1 border rounded"
                    />
                  </div>
                  <div>
                    <strong>Email:</strong>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="ml-2 p-1 border rounded"
                    />
                  </div>
                  <div>
                    <strong>Phone Number:</strong>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="ml-2 p-1 border rounded"
                    />
                  </div>
                  <button
                    className="mt-4 py-2 px-4 bg-green-500 text-white rounded-md"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                  <button
                    className="mt-4 ml-4 py-2 px-4 bg-gray-500 text-white rounded-md"
                    onClick={toggleEditMode}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p className="text-lg">
                    <strong>Name:</strong> {name}
                  </p>
                  <p className="text-lg">
                    <strong>Lastname:</strong> {lastname}
                  </p>
                  <p className="text-lg">
                    <strong>Location:</strong> {location}
                  </p>
                  <p className="text-lg">
                    <strong>Email:</strong> {email}
                  </p>
                  <p className="text-lg">
                    <strong>Phone Number:</strong> {phone}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-auto">
          <div className="w-full max-w-7xl min-h-auto p-8 mt-10 space-y-6 space-x-20 rounded-lg bg-gray-100 shadow-lg">
            <h1 className="text-2xl font-bold text-center">Create Listing</h1>
            <form
              className="flex flex-wrap justify-between space-x-6"
              onSubmit={handleSubmit}
            >
              <div className="flex-1 min-w-[48%] space-y-10">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={productName}
                  onChange={(e) => SetProductName(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Description"
                  className="w-full min-h-32 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex-1 min-w-[48%] space-y-10">
                <div className="w-full h-32 border-4 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden">
                  <label className="bg-white cursor-pointer w-full h-full flex items-center justify-center relative">
                    {filePreview ? (
                      <img
                        src={filePreview}
                        alt="Selected file"
                        className="w-full h-64 object-cover"
                      />
                    ) : (
                      <span className="text-gray-500">Click to upload</span>
                    )}
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                </div>
                <input
                  type="number"
                  placeholder="Price"
                  className="input-number w-full p-2 border border-inherit rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={price}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setPrice(newValue < 0 ? 0 : newValue);
                  }}
                  min={0}
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-32 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Upload
              </button>
            </form>
            {message && <p className="text-sm text-red-500">{message}</p>}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
