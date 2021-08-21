import React,{useState} from "react";
import Avatar from "../Avatar";
import UserInterests from "../Content/UserInterests";
import Buttons from "../Buttons/Buttons";
import axios from "axios";
import { useSelector } from "react-redux";
export default function FriendGoingItem(props) {
  const token = useSelector((state) => state.login.token);
  const [success, setSuccess] = useState('');
  const {
    featured_image,
    avatar,
    name,
    last_name,
    email,
    phone
  } = props.my_friend;
  console.log(props.user_activity)
  console.log(props.user_friend_id)
  const InviteFriend = async () => {  
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/friends_goings`,
            {
                user_activity_id:props.user_activity,
                user_friend_id:props.user_friend_id,
                status:"Pending"
            }
        ,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setSuccess(response.data.msg)
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
            image={featured_image  ? featured_image.url : avatar }
          />
        </div>
        <div className="flex-1 ml-6 space-y-1.5">
          <p className="text-3xl">
            {name} {last_name}
          </p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p className="text-2xl font-bold">Status</p>
          <div className={`w-4/5 rounded-lg ${props.status !== 'Pending' ?   'bg-green-400': 'bg-blue-400'} p-4 text-center`}>
          <p className="text-xl text-white">{props.status}</p>
          </div>
          

        </div>
      </div>
     
      <div className="w-full border-b-2 border-purple-200" />
    </>
  );
}
