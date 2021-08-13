import React from "react";
import backpack from "../../assets/images/backpack.svg";
import Buttons from "../Buttons/Buttons";
import TextHeaders from "../Texts/TextHeaders";
export default function Hero() {
  return (
    <div className="w-full h-full flex items-center p-9">
      <div className="w-2/4 flex flex-col items-center space-y-4">
          <TextHeaders title="Welcome to Backpack" />
       
        <p className="text-center text-lg text-secondary font-semibold">
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
