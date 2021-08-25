import React from "react";
import DetailCard from "./DetailCard";
import Star from "../Star";
import PlanActivity from "../PlanActivity/PlanActivity";
import CategoryImage from "../Images/CategoryImage";
import Avatar from "../Avatar";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux'
import { setUser } from "../../features/counter/loginSignupSlice";

export default function ActivityCard(props) {
  const token = useSelector((state) => state.login.token);
 const dispatch = useDispatch()
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
  
    data = { ...props };
  }


  console.log("user activities",props.join_activity)
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

      dispatch(setUser(response.data))
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
          user_activity={props.join_activity ? props.join_activity : props.id}
        />
      ) : null}

      <div className={`relative ${props.m} col-span-12 md:col-start-3 md:col-span-8 row-span-0 h-24 flex  items-center justify-evenly  bg-white  rounded-xl shadow-md shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 hover:bg-opacity-75 text-gray-500 space-x-3`}>
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
            <p className="md:text-xl">Do you want to go with me and my friends to? <span className="bg-primary cursor-pointer bg-opacity-40 rounded-full p-1 text-white" onClick={()=> {
           
              responseToFriend('Going')
            }}>Yes</span> <span className="font-bold cursor-pointer" onClick={()=> {
             
              responseToFriend('Not Going')
            }}>No</span></p>
            </div>
          </div>

          <div className="absolute top-16 "><p>Status: <span className="text-sm md:text-md p-2 bg-primary text-white rounded-full">{status}</span></p></div>
          </>
        ) : null}

        <CategoryImage category={data.category} />
        <h1 className="text-md md:text-xl   font-bold">{data.name}</h1>
        <Star />

        {props.date ? (
          <p className=" text-sm md:text-2xl text-red-400 ">{props.date}</p>
        ) : (
          <p
            className="md:text-2xl text-blue-800 hover:text-red-400 cursor-pointer"
            onClick={() => setPlan(true)}
          >
            Plan
          </p>
        )}
        <p
          className="md:text-2xl text-blue-800 hover:text-red-400 cursor-pointer"
          onClick={() => setDetails(!details)}
        >
          {details ? "Hide DEtails" : "Details"}
        </p>
      </div>
      
    </>
  );
}
