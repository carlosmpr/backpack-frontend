import React,{useState} from "react";
import { useSelector } from "react-redux";
export default function FriendRequestNavItem({setOpen}) {
  const user = useSelector((state) => state.login.user);
  return (
    <>
      {user.friend_request.length > 0 ? (
        <div className="cursor-pointer" onClick={() => setOpen(true)}>
          <div className="relative">
            <div className="p-1 absolute left-2 -top-5 bg-red-400 rounded-full text-xs text-white">
              <p>{user.friend_request.length}</p>
            </div>
            <i className="fas fa-user-friends text-3xl text-gray-500"></i>
          </div>
        </div>
      ) : null}
    </>
  );
}
