"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const days = Array.from({ length: 31 }, (_, i) => ++i);
  const years = Array.from({ length: 2024 - 1950 + 1 }, (_, i) => 1950 + i);
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];
  const countries = [
    "Georgia", "Russia", "China", "USA", "United Kingdom", "Italy", 
    "Greece", "Turkey", "Azerbaijan", "Armenia", "Kazakhstan", "India"
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
    day: '',
    month: '',
    year: '',
    street: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First Name is required";
    if (!formData.lastName) errors.lastName = "Last Name is required";
    if (formData.password !== formData.confirmPassword) {
      errors.password = "Passwords do not match";
    }
    if (!formData.email) errors.email = "Email is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!formData.day || !formData.month || !formData.year) {
      errors.dob = "Date of birth is required";
    }
    if (!formData.street || !formData.city || !formData.region || !formData.postalCode) {
      errors.address = "Complete address is required";
    }
    if (!formData.country) errors.country = "Country is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form Submitted', formData);
      router.push('/signIn');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="bg-gray-300 pt-24 pb-24">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form className="text-black" onSubmit={handleSubmit}>
          <div className="flex justify-center mb-5 text-gray-700 font-bold text-4xl">
            Registration
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input
              name="firstName"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input
              name="lastName"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.lastName ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              name="confirmPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              name="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
            <input
              name="phoneNumber"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNumber ? 'border-red-500' : ''}`}
              type="tel"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
            <div className="flex space-x-2">
              <select name="day" value={formData.day} onChange={handleChange} className="w-1/3 shadow border rounded">
                <option value="">Day</option>
                {days.map(day => <option key={day} value={day}>{day}</option>)}
              </select>
              <select name="month" value={formData.month} onChange={handleChange} className="w-1/3 shadow border rounded">
                <option value="">Month</option>
                {months.map((month, i) => <option key={i} value={month}>{month}</option>)}
              </select>
              <select name="year" value={formData.year} onChange={handleChange} className="w-1/3 shadow border rounded">
                <option value="">Year</option>
                {years.map(year => <option key={year} value={year}>{year}</option>)}
              </select>
            </div>
            {errors.dob && <p className="text-red-500 text-xs italic">{errors.dob}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
            <input
              name="street"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.street ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Street Address"
              value={formData.street}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
            <input
              name="city"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.city ? 'border-red-500' : ''}`}
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Region</label>
            <input
              name="region"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.region ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Region"
              value={formData.region}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Postal Code</label>
            <input
              name="postalCode"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.postalCode ? 'border-red-500' : ''}`}
              type="text"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
            <select
              name="country"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.country ? 'border-red-500' : ''}`}
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select a country</option>
              {countries.map((country, i) => (
                <option key={i} value={country}>{country}</option>
              ))}
            </select>
            {errors.country && <p className="text-red-500 text-xs italic">{errors.country}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => router.push("/")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
