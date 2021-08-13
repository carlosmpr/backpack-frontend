import React from "react";
import backpack from "../../assets/images/backpack.svg";
import Buttons from "../Buttons/Buttons";
export default function TopBar() {
  return (
    <div className="w-full h-12  flex flex-row bg-white backdrop-filter backdrop-blur-3xl bg-opacity-25  z-50 rounded-lg shadow-md justify-around items-center font-semibold text-lg">
      <div className="flex items-center">
        <img src={backpack} alt="backpack" className="w-10" />
        <p className="text-primary">Backpack</p>
      </div>
      <ul className="flex justify-evenly items-center w-3/6 text-secondary">
        <li>About</li>
        <li>Features</li>
        <li>Login</li>
        <li >
        <Buttons padding="p-2">
          <p>Register</p>
          </Buttons>
        </li>
      </ul>
    </div>
  );
}
