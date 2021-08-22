import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import { useSelector } from "react-redux";
import ActivityCard from "../Cards/ActivityCard";
import InvitationNavItem from "../Invitations/InvitationsNavItem";
import UserInvitations from "../Invitations/UserInvitations";
export default function MyActivities() {
  const token = useSelector((state) => state.login.token);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [invitations , setInvitations] = useState(false)
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/my_activities `, {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data)
        setData(response.data)
        setLoading(false)
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  if(loading){
      return <p>Loading ....</p>
  }

  if(!data.length > 0 && !invitations){
    return <div className="flex flex-col w-screen">
      
      No Planned Activities

      <div className=" right-12">
      <InvitationNavItem text={"Invitations"} setOpen={()=> setInvitations(true)}/>
      </div>
      </div>
  }

  return (
    <>
    
      <Banner msg={"My Activities"} />
      
      <div className="absolute top-72 right-12">
      <InvitationNavItem text={"Invitations"} setOpen={()=> setInvitations(true)}/>
      </div>
      <div className="absolute top-72  ml-3.5 cursor-pointer" onClick={()=> setInvitations(false)}>
      <p className="bg-primary p-2 rounded-full text-white">Planned </p> 
      </div>
     
      {invitations ? <UserInvitations /> :  data.map((item) => (
        <ActivityCard key={item.name} {...item} m={"my-4"}/>
      ))}
     
    </>
  );
}