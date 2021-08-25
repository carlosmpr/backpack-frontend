import React from "react";
import calendar from "../../assets/images/calendar.svg";
import TextHeaders from "../Texts/TextHeaders";
export default function Plan() {
  return (
    <div className="w-screen h-92 p-9 mt-16" id="features">
      <TextHeaders title="Plan activities" />
      <div className="w-full h-2/5 flex flex-col  space-y-12 md:flex-row justify-center items-center gap-x-12 mt-16">
      <div className="w-2/6" >
        <img src={calendar} alt={calendar} className="w-full" />
      </div>
      <div className="md:w-1/4" >
      <p className="text-center text-lg text-secondary font-semibold">Planning ahead means you won’t have to worry about what will happen tomorrow or next week. You’ll be in charge of your own time and that means you’ll be able to spend more time in the moment (once you have your plan laid out that is).</p>
      </div>
      </div>
    </div>
  );
}
