"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import WalletContextProvider from "./WalletContextProvider";
import { AppBar } from "./AppBar";

const Navbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor:
          scrollPosition > 50 ? "rgba(0,0,0,0.8)" : "transparent",
        backdropFilter: scrollPosition > 50 ? "blur(10px)" : "none",
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent"></h1>
        <nav className="flex items-center space-x-6">
          <Link
            href="/create-contract"
            className="text-white hover:text-accent transition-colors"
          >
            Create Contract
          </Link>

          <Link
            href="/dashboard"
            className="text-white hover:text-accent transition-colors"
          >
            Dashboard
          </Link>

          {/* Custom-styled Connect Wallet Button */}
          <WalletContextProvider>
            <AppBar />
          </WalletContextProvider>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
