import React from "react";
import DetailCard from "./DetailCard";
import Star from "../Star";
import PlanActivity from "../PlanActivity/PlanActivity";
import CategoryImage from "../Images/CategoryImage";
import Avatar from "../Avatar";
import axios from "axios";
import {useSelector} from 'react-redux'
export default function ActivityCard(props) {
  const token = useSelector((state) => state.login.token);
  let data;
  const [details, setDetails] = React.useState(false);
  const [plan, setPlan] = React.useState(false);
  const [status, setStatus] = React.useState(props.status)
  const close = () => {
    setDetails(false);
  };

  const closePlan = () => {
    setPlan(false);
  };

  if (props.activity) {
    data = { ...props.activity };
  } else {
    console.log("the props", props);
    data = { ...props };
  }

  const responseToFriend = async (responseStatus) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/invitation_response`,
            {
              invitaion_id: props.invitaion_id,
                status: responseStatus
            }
        ,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data)
      setStatus(responseStatus)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {plan ? (
        <PlanActivity id={data.id} name={data.name} close={closePlan} />
      ) : null}
      {details ? (
        <DetailCard
          close={close}
          {...data}
          date={props.date}
          user_activity={props.id}
        />
      ) : null}

      <div className="relative  col-start-3 col-span-8 row-span-0 h-24 flex  items-center justify-evenly  bg-white gap-4 rounded-xl shadow-md shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 hover:bg-opacity-75 text-gray-500">
        {props.user_invited ? (
          <>
          <div className="absolute -top-16 left-0 flex justify-center items-center">
            <Avatar
              name={".."}
              image={
                props.user_invited.featured_image
                  ? props.user_invited.featured_image.url
                  : props.user_invited.avatar
              }
            />
            <div>
            <p>{props.user_invited.name} {props.user_invited.last_name}</p>
            <p className="text-xl">Do you want to go with me and my friends to? <span className="bg-primary cursor-pointer bg-opacity-40 rounded-full p-1 text-white" onClick={()=> {
           
              responseToFriend('Going')
            }}>Yes</span> <span className="font-bold cursor-pointer" onClick={()=> {
             
              responseToFriend('Not Going')
            }}>No</span></p>
            </div>
          </div>

          <div className="absolute top-16 "><p>Status: <span className="p-2 bg-primary text-white rounded-full">{status}</span></p></div>
          </>
        ) : null}

        <CategoryImage category={data.category} />
        <h1 className="text-xl   font-bold">{data.name}</h1>
        <Star />

        {props.date ? (
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
