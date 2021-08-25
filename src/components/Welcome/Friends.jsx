import React from "react";
import calendar from "../../assets/images/friend.svg";
import find from "../../assets/images/find.svg";
import join from "../../assets/images/join.svg";
import chat from "../../assets/images/chatfriend.svg";
import TextHeaders from "../Texts/TextHeaders";
import FriendsItem from "./Friends/FriendsItem";
export default function Friends() {
  return (
    <div className="w-screen h-screen mt-16 md:mt-40 p-4" id="features">
      <TextHeaders title="More fun with travelers" />
      <div className="w-full md:h-2/5 flex flex-col space-y-4  md:flex-row justify-evenly items-center gap-x-12 md:mt-36">
      <div className="w-2/5 md:w-2/6" >
        <img src={calendar} alt={calendar} className="w-full" />
     <p className="text-center text-lg md:text-2xl font-bold">Maintain your friends and travelers contact</p>
      </div>
      <div className="md:w-1/4 space-y-4 p-4 bg-white  rounded-xl shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-50 " >
      <FriendsItem text="Find new friends" image={find}/>
      <FriendsItem text="Invite friends to activity or join" image={join}/>
      <FriendsItem text="Chat with Friends" image={chat}/>
      </div>
      </div>
    </div>
  );
}