import React from "react";
import Avatar from "../Avatar";
import UserInterests from "../Content/UserInterests";
import Buttons from "../Buttons/Buttons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeFriendRequest } from "../../features/counter/loginSignupSlice";
export default function FriendRequestItem(props) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const {
    featured_image,
    avatar,
    name,
    last_name,
    hiking,
    swimming,
    eating,
    camping,
    touring,
    walking,
  } = props.users;

  const acceptFriendRequest = async () => {
    dispatch(removeFriendRequest(props.id));
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/accept_friend`,
        {
          firend_request: props.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelRequest = async () => {
    dispatch(removeFriendRequest(props.id));
    try {
      const response = await axios.delete(
        `http://127.0.0.1:5000/firend_requests/${props.id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center">
        <div className="w-20">
          <Avatar
            w="w-20"
            image={featured_image === "" ? avatar : featured_image.url}
          />
        </div>
        <div className="flex-1 ml-6 space-y-1.5">
          <p className="text-3xl">
            {name} {last_name}
          </p>
          <p className="text-lg font-bold">Interest</p>
          <UserInterests
            hikin={hiking}
            swimming={swimming}
            eating={eating}
            camping={camping}
            touring={touring}
            walking={walking}
            absolute=""
          />
        </div>
      </div>
      <div className="flex w-full  justify-evenly ">
        <Buttons text="Accept" click={acceptFriendRequest}></Buttons>
        <Buttons text="Reject" click={cancelRequest}></Buttons>
      </div>
      <div className="w-full border-b-2 border-purple-200" />
    </>
  );
}
