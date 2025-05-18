"use client";

import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";

export default function useBadgeCounts() {
  const { isLoggedIn, user, loading } = useAuth();
  const [counts, setCounts] = useState({ cart: 0, wishlist: 0 });

  useEffect(() => {
    console.log(isLoggedIn);
    if (!isLoggedIn) return;
    const fetchCounts = async () => {
      try {
        const [cartRes, wishlistRes] = await Promise.all([
          api.get("/api/cart/count"),
          api.get("/api/wishlist/count"),
        ]);
        setCounts({
          cart: cartRes.data.count || 0,
          wishlist: wishlistRes.data.count || 0,
        });
      } catch (error) {
        console.error("Failed to fetch badge counts:", error);
      }
    };

    fetchCounts();
  }, [isLoggedIn]);

  return counts;
}
