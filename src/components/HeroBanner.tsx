"use client";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-[70vh] w-full bg-white flex items-center justify-center px-6 overflow-hidden">
      <div
        className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-300 rounded-full opacity-20 blur-3xl"
        aria-hidden="true"
      ></div>

      <div
        className={`relative max-w-4xl text-center transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          Shop like it’s your{" "}
          <span className="relative inline-block text-indigo-600">
            Papa ki Dukan
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg mx-auto">
          Wahi bharosa, wahi apnapan — ab online.
        </p>
        <a
          href="/products"
          className="inline-block px-10 py-4 bg-indigo-600 text-white rounded-full font-semibold shadow-md hover:bg-indigo-700 transition"
        >
          Explore Nearby Stores
        </a>
      </div>
    </section>
  );
}
