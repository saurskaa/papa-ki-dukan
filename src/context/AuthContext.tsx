// src/context/AuthContext.tsx
"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import api from "@/lib/axios";

interface User {
  // define your user shape here, e.g.
  id: number;
  name: string;
  email: string;
  // add other fields as per your API
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoggedIn: false,
  loading: true,
  refreshUser: async () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const { data } = await api.get<User>("/api/me");
      console.log(data);
      setUser(data);
      console.log("user " +user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("User updated:", user);
  }, [user]);
  useEffect(() => {
    console.log("Running useEffect in AuthProvider");
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);
