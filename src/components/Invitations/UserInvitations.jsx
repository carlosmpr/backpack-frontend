import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ActivityCard from '../Cards/ActivityCard';
import Banner from '../Banner';
import Avatar from '../Avatar';

export default function UserInvitations() {
    const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);
  const {activity_invitation} =user

  console.log(activity_invitation)
    return (
   
            activity_invitation.map(item => <>
        
            <ActivityCard {...item.detail} date={item.date} user_invited ={item.user} status={item.status} invitaion_id={item.invitaion_id} m={"my-12"}/>
          
            </>)

       
    )
}
