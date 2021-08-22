import React from 'react'
import {  useSelector } from "react-redux";
import ActivityCard from '../Cards/ActivityCard';

export default function UserInvitations() {
  const user = useSelector((state) => state.login.user);
  const {activity_invitation} =user
  const invitations = [...activity_invitation].reverse()

    return (   
      invitations.map(item => <>
            <ActivityCard {...item.detail} join_activity={item.join_activity} date={item.date} user_invited ={item.user} status={item.status} invitaion_id={item.invitaion_id} m={"my-20"}/>
            </>)
    )
}
