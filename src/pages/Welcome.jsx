import React from "react";
import TopBar from "../components/Welcome/TopBar";
import Hero from "../components/Welcome/Hero";
import Features from "../components/Welcome/Features";
export default function Welcome() {
  return (
    <div className="w-screen h-screen  p-3 ">
      <TopBar />
      <Hero />
      <Features />
    </div>
  );
}
