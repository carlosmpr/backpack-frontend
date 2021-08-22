import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ActivityCard from '../Cards/ActivityCard';
import Banner from '../Banner';
import Avatar from '../Avatar';

export default function UserInvitations() {
    const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);
  const {activity_invitation} =user
  const invitations = [...activity_invitation].reverse()

  console.log("the activities",activity_invitation)
    return (
   
      invitations.map(item => <>
        
            <ActivityCard {...item.detail} join_activity={item.join_activity} date={item.date} user_invited ={item.user} status={item.status} invitaion_id={item.invitaion_id} m={"my-20"}/>
          
            </>)

       
    )
}
