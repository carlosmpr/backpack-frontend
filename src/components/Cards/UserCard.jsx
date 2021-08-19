import React, { useState } from "react";
import Avatar from "../Avatar";
import Buttons from "../Buttons/Buttons";
import UserInterests from "../Content/UserInterests";
import axios from "axios";
export default function UserCard(props) {
  const { id, avatar, name, last_name, featured_image, token } = props;
  const [success, setSuccess] = useState('');
  const friendRequest = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/firend_requests`,
        {
          user_invite_id: id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      setSuccess(response.data.msg);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className=" h-96 w-full rounded-3xl  col-span-4 row-span-0 top-0 right-5  rounded-3xl shadow-lg   flex  flex-col items-center  backdrop-filter bg-primary backdrop-blur-lg backdrop-opacity-70 bg-opacity-10 overflow-hidden">
      <div className="h-96 w-full items-center  flex flex-col  ">
        <div className="m-3 h-1/3">
          <Avatar
            w="w-56"
            h="h-72"
            name={`${name} ${last_name}`}
            image={featured_image ? featured_image.url : avatar}
          />
        </div>
        <div className=" h-1/3">
          <UserInterests {...props} />
        </div>
        {success !== ''? (
          <div className={`w-4/5 rounded-lg ${success === 'Invitation send' ?   'bg-green-400': 'bg-blue-400'} p-4 text-center`}>
            <p className="text-white">{success}</p>
          </div>
        ) : (
          <div className="flex w-full justify-around m-7 ">
            <Buttons click={friendRequest}>Add Friend</Buttons>
          </div>
        )}
      </div>
    </div>
  );
}
