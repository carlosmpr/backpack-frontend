import React from "react";
import DetailCard from "./DetailCard";
import Star from "../Star";
import PlanActivity from "../PlanActivity/PlanActivity";
import CategoryImage from "../Images/CategoryImage";
export default function ActivityCard(props) {
  let data;
  const [details, setDetails] = React.useState(false);
  const [plan, setPlan] = React.useState(false);
  const close = () => {
    setDetails(false);
  };

  const closePlan = () => {
    setPlan(false);
  };

  if (props.activity) {
    data = { ...props.activity };
  } else {
    data = { ...props };
  }

  console.log(props);
  return (
    <>
      {plan ? (
        <PlanActivity id={data.id} name={data.name} close={closePlan} />
      ) : null}
      {details ? (
        <DetailCard close={close} {...data} date={props.date} user_activity={props.id}/>
      ) : null}

      <div className="col-start-3 col-span-8 row-span-0 h-24 flex  items-center justify-evenly  bg-white gap-4 rounded-xl shadow-md shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 hover:bg-opacity-75 text-gray-500">
        <CategoryImage category={data.category} />
        <h1 className="text-xl   font-bold">{data.name}</h1>
        <Star />

        {props.activity ? (
          <p className="text-2xl text-red-400 ">{props.date}</p>
        ) : (
          <p
            className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer"
            onClick={() => setPlan(true)}
          >
            Plan
          </p>
        )}
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
