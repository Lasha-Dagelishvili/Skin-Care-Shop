"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    const loggedInUser = {
      fullName: "Lasha Dagelishvili",
      email: emailOrPhone,
      profilePic: null,
    };

    localStorage.setItem("user", JSON.stringify(loggedInUser));
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="flex justify-center text-2xl font-bold mb-2">Sign in</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email or Phone</label>
            <input
              name="emailOrPhone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="relative">
              <input
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <a className="cursor-pointer text-blue-500 hover:text-blue-800 text-sm">
              Forgot password?
            </a>
          </div>

          <div className="mb-4">
            <button
              className="w-full bg-amber-800 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="mb-4">
          <button
            className="w-full bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => router.push("/signUp")}
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
