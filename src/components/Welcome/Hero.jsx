import React from "react";
import backpack from "../../assets/images/backpack.svg";
import Buttons from "../Buttons/Buttons";
import TextHeaders from "../Texts/TextHeaders";
export default function Hero() {
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center space-y-16 md:space-y-0 p-9">
      <div className=" flex flex-col  items-center space-y-4 mt-12 md:mt-0 md:w-2/4">
          <TextHeaders title="Welcome to Backpack " />
        <p className="text-center text-md md:text-lg text-secondary font-semibold">
          Do you want your travel Experience to be unique? with backpack you can{" "}
          <span className="text-primary">plan activities</span> and invite
          friends in <span className="text-primary">different places</span> of
          the world
        </p>
        <Buttons text="Start now!" />
      </div>
      <div className="w-2/4">
        <img src={backpack} alt="backpack" className="w-full" />
      </div>
    </div>
  );
}
