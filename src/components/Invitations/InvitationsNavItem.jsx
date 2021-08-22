import React from "react";
import { useSelector } from "react-redux";
import backpack from "../../assets/images/backpack.svg";
export default function InvitationNavItem({ setOpen, text }) {
  const user = useSelector((state) => state.login.user);
  const invitation =  user.activity_invitation.filter(
    (invitation) => invitation.status === "Pending"
  ).length
  console.log(
    invitation
  );
  if (text) {
    return (
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        <div className="relative flex items-center">
          <img src={backpack} alt="backpack" className="w-10" />
          <p className="bg-primary p-2 rounded-full text-white">
            {text} {user.activity_invitation.length}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {invitation > 0 ? (
        <div className="cursor-pointer" onClick={() => setOpen(true)}>
          <div className="relative flex items-center">
            <div className="p-1 absolute left-2 -top-5 bg-red-400 rounded-full text-xs text-white">
              <p>{invitation}</p>
            </div>
            <img src={backpack} alt="backpack" className="w-10" />
          </div>
        </div>
      ) : <div className="-mb-48"></div>}
    </>
  );
}
