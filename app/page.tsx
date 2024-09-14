"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <header
        className="fixed w-full z-50 transition-all duration-300"
        style={{
          backgroundColor:
            scrollPosition > 50 ? "rgba(0,0,0,0.8)" : "transparent",
          backdropFilter: scrollPosition > 50 ? "blur(10px)" : "none",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-neon-green">DAO Platform</h1>
          <nav className="space-x-6">
            <Link
              href="/create-dao"
              className="text-white hover:text-neon-green transition-colors"
            >
              Create DAO
            </Link>
            <Link
              href="/dashboard"
              className="text-white hover:text-neon-green transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-neon-green transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-up text-neon-green neon-text">
            Build Your DAO
          </h1>
          <p className="text-xl text-white mb-8 animate-fade-in-up animation-delay-300">
            Create, customize, and manage decentralized organizations with ease.
          </p>
          <Link
            href="/create-dao"
            className="inline-block bg-transparent border-2 border-neon-green text-neon-green font-bold py-3 px-8 rounded-full hover:bg-neon-green hover:text-black transition duration-300 animate-fade-in-up animation-delay-600 neon-box"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">
            Your DAO at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Proposals", "Voting Results", "Treasury Management"].map(
              (feature, index) => (
                <div
                  key={feature}
                  className="bg-gray-900 p-6 rounded-lg relative group overflow-hidden neon-border"
                >
                  <h3 className="text-xl font-semibold mb-4 relative z-10 text-neon-green">
                    {feature}
                  </h3>
                  <p className="text-white mb-4 relative z-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Link
                    href={`/${feature.toLowerCase().replace(" ", "-")}`}
                    className="inline-block text-neon-green hover:text-white relative z-10 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 DAO Platform. All Rights Reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --neon-green: #39ff14;
        }
        .text-neon-green {
          color: var(--neon-green);
        }
        .bg-neon-green {
          background-color: var(--neon-green);
        }
        .border-neon-green {
          border-color: var(--neon-green);
        }
        .neon-text {
          text-shadow: 0 0 10px var(--neon-green), 0 0 20px var(--neon-green),
            0 0 30px var(--neon-green);
        }
        .neon-box {
          box-shadow: 0 0 10px var(--neon-green), 0 0 20px var(--neon-green);
        }
        .neon-border {
          border: 2px solid var(--neon-green);
          box-shadow: 0 0 10px var(--neon-green),
            inset 0 0 10px var(--neon-green);
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}
