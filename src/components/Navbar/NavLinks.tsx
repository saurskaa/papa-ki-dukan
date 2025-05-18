"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import IconButton from "./IconButton";
import useBadgeCounts from "@/lib/hooks/useBadgeCount";

export default function NavLinks() {
  const {cart, wishlist} = useBadgeCounts();
  return (
    <div className="flex items-center space-x-6">
      <Link
        href="/categories"
        className="hidden md:block text-gray-700 hover:text-indigo-600 transition font-medium"
      >
        Categories
      </Link>

      <IconButton href="/wishlist" icon={<FiHeart size={24} />} badgeCount={wishlist} />
      <IconButton href="/cart" icon={<FiShoppingCart size={24} />} badgeCount={cart} badgeColor="bg-indigo-600" />

      <Link
        href="/login"
        className="hidden md:block text-gray-700 hover:text-indigo-600 transition font-medium"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="hidden md:block text-gray-700 hover:text-indigo-600 transition font-medium"
      >
        Sign Up
      </Link>
    </div>
  );
}
