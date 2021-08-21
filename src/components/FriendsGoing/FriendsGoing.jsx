import React, { useState, useEffect } from "react";
import Modal from "../modals/Modal";
import { useSelector } from "react-redux";
import axios from "axios";
import FriendGoingItem from "./FriendGoinItem";
export default function FriendsGoing({ close, user_activity }) {
  const token = useSelector((state) => state.login.token);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/my_friends_goings/${user_activity}`, {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  if (loading) {
    return <p>Loading ....</p>;
  }
  console.log(data)
  return (
    <Modal close={close}>
      <div className="bg-white w-5/12 h-4/6 mr-96 rounded-lg mt-14 p-9 flex flex-col  bg-opacity-70 overflow-y-scroll gap-y-8">
        {data.map(item => <FriendGoingItem  key={item.name} {...item} user_activity={user_activity}/>)}
      </div>
    </Modal>
  );
}
