import React from "react";
import Avatar from "../Avatar";
import Buttons from "../Buttons/Buttons";
import UserInterests from "../Content/UserInterests";
export default function UserCard(props) {
  const { close, name, last_name } = props;
  return (
    <div className=" h-96 w-full rounded-3xl  col-span-4 row-span-0 top-0 right-5  rounded-3xl shadow-3xl w-1/5  flex  flex-col items-center  backdrop-filter backdrop-blur-lg bg-opacity-75 bg-white overflow-hidden">
      <div className="w-full h-5/6 absolute">
        <svg
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 -120"
        >
          <path
            fill="#5000ca"
            fill-opacity="1"
            d="M0,160L80,176C160,192,320,224,480,245.3C640,267,800,277,960,282.7C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="h-96 w-full items-center p-9 flex flex-col space-y-8 ">
        <Avatar w="w-24" name={`${name} ${last_name}`} />
        <UserInterests {...props} />

        <div className="flex w-full justify-around">
          <Buttons>Invite user</Buttons>
        </div>
      </div>
    </div>
  );
}
