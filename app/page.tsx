"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SparklesCore } from "../components/ui/sparkles";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import WalletContextProvider from "../components/WalletContextProvider";

import { BalanceDisplay } from "../components/BalanceDisplay";
import { AppBar } from "../components/AppBar";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleCreateContractClick = () => {
    router.push("/dashboard");
  };

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
          <h1 className="text-2xl font-bold text-accent"></h1>
          <nav className="space-x-6">
            <Link
              href="/create-Contract"
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
            <button className="space-x-2 px-6 py-3 rounded-full bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg">
              <span>Connect Wallet</span>
            </button>
            <WalletContextProvider>
              <AppBar />
              
            </WalletContextProvider>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </div>
        <div className="relative z-10 text-center">
          <div className="h-4/6 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center text-white relative z-20">
              archiContract
            </h1>
            <div className="w-3/4 h-28 relative mt-4">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>

          {/* New Div with Headline and Subheadline */}
          <div className="mt-12 text-center">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-300">
              Effortlessly Build and Manage Your{" "}
              <span className="text-yellow-400">Contract</span> <br />
            </h2>
            {/* Updated Button */}
            <button
              onClick={handleCreateContractClick}
              className="mt-6 bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300"
            >
              Create Contract
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">
            Your Contract at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Proposals", "Voting Results", "Treasury Management"].map(
              (feature) => (
                <div
                  key={feature}
                  className="bg-gray-800 p-6 rounded-lg relative group overflow-hidden hover:bg-gray-700 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 relative z-10 text-yellow-400">
                    {feature}
                  </h3>
                  <p className="text-gray-300 mb-4 relative z-10">
                    Get insights and manage your Contract with a glance.
                  </p>
                  <Link
                    href={`/${feature.toLowerCase().replace(" ", "-")}`}
                    className="inline-block text-yellow-400 hover:text-white relative z-10 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="h-screen bg-yellow-400 text-black flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Tutorials to Get You Started
          </h2>
          <p className="text-lg mb-12">
            Learn how to build and manage your Contract with step-by-step
            guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Create a Contract",
                description: "Start building your Contract from scratch.",
              },
              {
                title: "Voting Process",
                description: "Learn how to manage proposals and votes.",
              },
              {
                title: "Treasury Management",
                description:
                  "Understand how to manage your Contract’s finances.",
              },
            ].map((tutorial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{tutorial.title}</h3>
                <p className="mb-4">{tutorial.description}</p>
                <Link
                  href={`/tutorials/${tutorial.title
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="text-black hover:text-gray-700 transition-colors"
                >
                  Start Tutorial →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <StickyScroll content={content} />

      {/* Footer */}
      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Contract Platform. All Rights Reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --accent-color: #ebff54;
        }
        .text-accent {
          color: var(--accent-color);
        }
        .bg-accent {
          background-color: var(--accent-color);
        }
        .border-accent {
          border-color: var(--accent-color);
        }
        .glow-text {
          text-shadow: 0 0 10px var(--accent-color),
            0 0 20px var(--accent-color), 0 0 30px var(--accent-color);
        }
        .glow-box {
          box-shadow: 0 0 10px var(--accent-color), 0 0 20px var(--accent-color);
        }
        .accent-border {
          border: 2px solid var(--accent-color);
          box-shadow: 0 0 10px var(--accent-color),
            inset 0 0 10px var(--accent-color);
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
