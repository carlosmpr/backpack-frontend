import React,{useEffect} from "react";
import TopBar from "../components/Welcome/TopBar";
import Hero from "../components/Welcome/Hero";
import Features from "../components/Welcome/Features";
import About from "../components/Welcome/About";
import Signup from "./Signup";

import { useHistory } from "react-router-dom";
export default function Welcome() {
  let history = useHistory();
  useEffect(() => {
    const findToken = localStorage.getItem("token");
    if (findToken) {
      history.push('/Myaccount')
    }
  }, [])
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
