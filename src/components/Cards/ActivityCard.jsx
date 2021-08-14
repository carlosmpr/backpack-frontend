import React from "react";
import DetailCard from "./DetailCard";
import Star from "../Star";
import PlanActivity from "../PlanActivity/PlanActivity";
export default function ActivityCard(props) {

  const [details, setDetails] = React.useState(false);
  const [plan, setPlan] = React.useState(false)
  const close = () => {
      setDetails(false)
  }

  const closePlan = () => {
    setPlan(false)
}
  const {name ,id} = props
  return (
    <>
      {plan ? <PlanActivity id={id} name={name} close={closePlan}/>:null}
      {details ? <DetailCard close={close} {...props}/> : null}

      <div className="col-start-3 col-span-8 row-span-0 h-24 flex  items-center justify-evenly  bg-white gap-4 rounded-xl shadow-md shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 hover:bg-opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-400 text-4xl"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <h1 className="text-xl text-secondary  font-bold">{name}</h1>
     <Star />
        <p className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer" onClick={()=> setPlan(true)}>
          Plan
        </p>

        <p
          className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer"
          onClick={() => setDetails(!details)}
        >
          {details ? "Hide DEtails" : "Details"}
        </p>
      </div>
    </>
  );
}
