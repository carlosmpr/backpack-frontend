import React from "react";
import TopBar from "../components/Welcome/TopBar";
import Hero from "../components/Welcome/Hero";
import Features from "../components/Welcome/Features";
import About from "../components/Welcome/About";
import Signup from "./Signup";
import {useSelector} from 'react-redux'
export default function Welcome() {
  const token = useSelector((state) => state.login.token)
  console.log(token)
  return (
    <div className="w-screen h-screen  p-3 ">
      <TopBar />
      <Hero />
      <Features />
      <About />
      <Signup />
    </div>
  );
}
