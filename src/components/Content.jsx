import React from "react";
import Locations from "./Content/Locations";
import Activities from "./Content/Activities";
import Users from "./Content/Users";
import MyActivities from "./Content/MyActivities";
import MyFriend from "./Content/MyFriend";
import {useSelector} from 'react-redux'
import Account from "./Content/Account";
export default function Content() {

const seleccted = useSelector((state)=> state.location.nav)
console.log(seleccted)
  const dashboardContent = () => {
    switch (seleccted) {
      case "Activities":
        return <Activities />

      case "Users":
        return <Users />

      case "MyActivity":
       return <MyActivities />

       case "MyFriends":
         return <MyFriend />

        case "Account":
          return <Account />

    
      default:
        return (<Locations />)
    }
  }
  return (
    <div className="grid grid-cols-12  p-10 w-full  h-screen  gap-x-6 overflow-y-scroll">
      
     
     {dashboardContent()}
      
    
      
    </div>
  );
}
