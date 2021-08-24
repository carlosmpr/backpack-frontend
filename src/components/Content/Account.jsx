import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../Avatar";
import UserInterests from "./UserInterests";
import DashBoard from "../Cards/DashBoard";
export default function Account() {
  const user = useSelector((state) => state.login.user);
  console.log(user);
  return (
    <div className="flex flex-col flex-grow col-start-1 col-span-12 p-4 space-y-4">
      <div className="flex items-center">
        <Avatar
          image={user.featured_image ? user.featured_image.url : user.avatar}
          w={"w-60"}
          h={`h-72`}
        />
        <p className="font-bold text-6xl ">{`${user.name} ${user.last_name}`}</p>
      </div>
      <div className="flex justify-evenly w-full p-4 space-x-4 bg-white  rounded-xl  text-xl  shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 hover:bg-opacity-75 text-gray-500">
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>

      <div className="flex flex-col w-full items-center space-y-2">
        <p className="font-bold text-3xl">Interest</p>
        <div>
          <UserInterests
            hiking={user.hiking}
            eating={user.eating}
            swimming={user.swimming}
            walking={user.walking}
            camping={user.camping}
            touring={user.touring}
            absolute=""
          />
        </div>
      </div>
      <p className="font-bold text-3xl text-center">Stat</p>
      <div className="flex justify-evenly w-full p-4 space-x-4 ">
        <DashBoard
          title={"Friend Request"}
          value={user.friend_request.length}
        />
        <DashBoard
          title={"Invitations"}
          color={"bg-red-400"}
          value={user.activity_invitation.length}
        />
      </div>

      <div className="flex justify-evenly w-full p-4 space-x-4">
        <DashBoard
          title={"Activities"}
          value={user.activities}
          color={"bg-green-400"}
        />
        <DashBoard title={"Friends"} value={user.friends} color={"bg-indigo-400"}/>
      </div>
    </div>
  );
}
