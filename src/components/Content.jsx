import React from "react";
import Locations from "./Content/Locations";
import Activities from "./Content/Activities";
import Users from "./Content/Users";
import {useSelector} from 'react-redux'
export default function Content() {

const seleccted = useSelector((state)=> state.location.nav)
console.log(seleccted)
  const dashboardContent = () => {
    switch (seleccted) {
      case "Activities":
        return <Activities />

      case "Users":
        return <Users />
    
      default:
        return (<Locations />)
    }
  }
  return (
    <div className="grid grid-cols-12  p-10 w-full  h-screen space-y-4 gap-x-6 overflow-y-scroll">
      
     
     {dashboardContent()}
      
    
      
    </div>
  );
}
