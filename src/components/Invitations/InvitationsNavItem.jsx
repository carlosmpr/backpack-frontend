import React from "react";
import { useSelector } from "react-redux";
import backpack from "../../assets/images/backpack.svg";
export default function InvitationNavItem({setOpen, text}) {
  const user = useSelector((state) => state.login.user);
  return (
    <>
      {user.activity_invitation.length > 0 ? (
        <div className="cursor-pointer" onClick={() => setOpen(true)}>
          <div className="relative flex items-center">
             {text ? null :<div className="p-1 absolute left-2 -top-5 bg-red-400 rounded-full text-xs text-white">
              <p>{user.activity_invitation.length}</p>
            </div> } 
            
            <img src={backpack} alt="backpack" className="w-10" />
            {text ?<p className="bg-primary p-2 rounded-full text-white">{text} {user.activity_invitation.length}</p>: null }
          </div>
        </div>
      ) : null}
    </>
  );
}
