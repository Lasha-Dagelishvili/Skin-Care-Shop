"use client";
import Navbar from "./components/navbar";
import App from "./components/app";
import { useRouter } from "next/navigation";

export default function Home() {

  return (
    <div>
      <Navbar />
      <App />
    </div>
  );
}
