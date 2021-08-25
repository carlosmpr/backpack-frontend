import React, { useState } from "react";
import Reviews from "../Reviews/Reviews";
import PlanActivity from "../PlanActivity/PlanActivity";
import Star from "../Star";
import InviteFriends from "../InviteFriend/InviteFriends";
import FriendsGoing from "../FriendsGoing/FriendsGoing";
import Buttons from "../Buttons/Buttons";
export default function DetailCard({
  close,
  name,
  description,
  directions,
  state,
  id,
  date,
  image,
  user_activity
}) {
  const [show, setShow] = useState(false);
  const [plan, setPlan] = useState(false);
  const [inviteFriend, setInviteFriend] =useState(false)
  const [friendsGoing, setFriendsGoing] =useState(false)

  const closeReviews = () => {
    setShow(false);
  };

  const closePlan = () => {
    setPlan(false);
  };


  const closeInvite = () => {
    setInviteFriend(false)
  }


  const closefriendsGoing = () => {
    setFriendsGoing(false)
  }


  return (
    <>
    {friendsGoing ? <FriendsGoing user_activity={user_activity} close={closefriendsGoing}/> : null}
    {inviteFriend ? <InviteFriends user_activity={user_activity} close={closeInvite}/> : null}
      {plan ? (
        <PlanActivity close={closePlan} id={id} name={name} m="md:mr-96" />
      ) : null}
      {show ? <Reviews close={closeReviews} id={id} /> : null}
      <div
        className="h-screen w-11/12 rounded-3xl md:w-2/6 top-0 right-5  absolute rounded-tr-lg shadow-3xl w-1/5  flex  flex-col items-center  backdrop-filter backdrop-blur-lg bg-opacity-75 bg-white z-10"
        style={{ marginTop: "-5px" }}
      >
        
        <div className="h-full w-full  p-9 flex flex-col space-y-4 ">
          <div className="flex w-full justify-between">
          <div className=" cursor-pointer z-50" onClick={close}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {date ?   <div className="p-4 cursor-pointer bg-indigo-300 text-white rounded-xl shadow-xl" onClick={()=> setInviteFriend(true)}>
          <p >Invite Friends</p>
          </div>: null }
        
          </div>
          <div className="h-2/4 w-4/5 bg-white self-center rounded-3xl shadow-2xl z-50 overflow-hidden">
          <img src={image} className="w-full h-full" alt={image} />
          </div>
          <h1 className="text-4xl text-blue-800 self-center font-bold">
            {name}
          </h1>

          <h3 className="text-lg font-bold">Likes</h3>
          <Star />
          <h3 className="text-lg font-bold">Description</h3>
          <p className="text-justify text-gray-500">
            {description}
          </p>
          <h3 className="text-lg font-bold">Location</h3>
          <p className="text-justify text-gray-500">
           
            {`${state} ${directions}`}
          </p>
          <div className="flex w-full justify-around">
            {date ? (
              <p className="text-2xl  text-red-400 r">
                Date:{date}
              </p>
            ) : (
              <p
                className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer text-gray-500"
                onClick={() => {
                  setShow(false);
                  setPlan(!plan);
                }}
              >
                {plan ? "Unplan" : "Plan"}
              </p>
            )}

            <p
              className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer text-gray-500"
              onClick={() => {
                setPlan(false);
                setShow(!show);
              }}
            >
              {show ? "Close" : "Reviews"}
            </p>
          </div>
          {date ?  <Buttons text="Friends Invited" click={()=> setFriendsGoing(true)}></Buttons> : null }
         
        </div>
      </div>
    </>
  );
}
