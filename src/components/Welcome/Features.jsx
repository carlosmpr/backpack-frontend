import React from "react";
import TextHeaders from "../Texts/TextHeaders";
import InfoCard from "../Cards/InfoCard";
import hiking from '../../assets/images/hiking.svg'
import swim from '../../assets/images/swim.svg'
import eating from '../../assets/images/eating.svg'
import running from '../../assets/images/running.svg'
import touring from '../../assets/images/touring.svg'
import camping from '../../assets/images/camping.svg'
export default function Features() {
  return (
    <div className="w-screen md:h-screen -mt-36 md:mt-0 p-4" id="features">
      <TextHeaders title="Find activities in different locations" />
      <div className="w-full justify-evenly flex gap-x-4 gap-y-8 flex-wrap mt-16">
      <InfoCard image={hiking} text={"Hiking"}/>
      <InfoCard image={swim} text={"Swimming"}/>
      <InfoCard image={eating} text={"Eating"}/>
      <InfoCard image={running} text={"Running"}/>
      <InfoCard image={touring} text={"Touring"}/>
      <InfoCard image={camping} text={"Camping"}/>
     
      </div>
    </div>
  );
}
