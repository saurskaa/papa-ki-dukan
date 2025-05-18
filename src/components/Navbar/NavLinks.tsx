"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import IconButton from "./IconButton";

export default function NavLinks() {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="flex items-center space-x-6">
      <Link
        href="/categories"
        className="hidden md:block text-gray-700 hover:text-indigo-600 transition font-medium"
      >
        Categories
      </Link>

      <IconButton href="/wishlist" icon={<FiHeart size={24} />} badgeCount={3} />
      <IconButton href="/cart" icon={<FiShoppingCart size={24} />} badgeCount={2} badgeColor="bg-indigo-600" />

      <Link
        href="/login"
        className="hidden md:block text-gray-700 hover:text-indigo-600 transition font-medium"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="hidden md:block text-indigo-600 font-semibold hover:underline"
      >
        Sign Up
      </Link>
    </div>
  );
}
