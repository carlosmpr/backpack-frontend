import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import { useSelector } from "react-redux";
import ActivityCard from "../Cards/ActivityCard";
import InvitationNavItem from "../Invitations/InvitationsNavItem";
export default function MyActivities() {
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
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

  if(!data.length > 0){
    return <div>No activities found</div>
  }
  return (
    <>
    
      <Banner msg={"My Activities"} />
      <div className="absolute top-72 right-32">
      <InvitationNavItem text={"Invitations"}/>
      </div>
      {data.map((item) => (
        <ActivityCard key={item.name} {...item} />
      ))}
    </>
  );
}