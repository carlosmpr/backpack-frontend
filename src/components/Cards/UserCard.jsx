import React from "react";
import Avatar from "../Avatar";
import Buttons from "../Buttons/Buttons";
import UserInterests from "../Content/UserInterests";
export default function UserCard(props) {
  const { close, name, last_name } = props;
  return (
    <div className=" h-96 w-full rounded-3xl  col-span-4 row-span-0 top-0 right-5  rounded-3xl shadow-lg   flex  flex-col items-center  backdrop-filter bg-primary backdrop-blur-lg backdrop-opacity-70 bg-opacity-10 overflow-hidden">
      
      <div className="h-96 w-full items-center  flex flex-col  ">
        <div className="m-3 h-1/3">
        <Avatar w="w-26" name={`${name} ${last_name}`} />
        </div>
<div className=" h-1/3">
        <UserInterests {...props} />
        </div>

        <div className="flex w-full justify-around m-7 ">
          <Buttons>Invite user</Buttons>
        </div>
      </div>
    </div>
  );
}
