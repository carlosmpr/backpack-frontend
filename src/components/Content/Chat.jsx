import React, { useEffect, useState, useRef } from "react";
import { createConsumer } from "@rails/actioncable";
import Modal from "../modals/Modal";
import Input from "../Input";
import Buttons from "../Buttons/Buttons";
import axios from "axios";
import Avatar from "../Avatar";
import ChatItem from "../Chat/ChatItem";
import {useSelector} from 'react-redux'
export default function Chat({ close, channelId, token, name, image }) {
  const user = useSelector((state) => state.login.user);
  const [messages, setMessages] = useState(channelId.messages);
  const [comment, setComment] = useState("");
  const cable = useRef();
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (!cable.current) {
      cable.current = createConsumer("ws://localhost:5000/cable");
    }
    const paramsTosend = {
      channel: "ChatRoomsChannel",
      id: channelId.id,
    };
    const handlers = {
      connected() {
        console.log("connected");
      },
      received(data) {
        console.log("thedata", data);
        setMessages([...messages, JSON.parse(data)]);
        scrollToBottom();
      },
      disconnected() {
        console.log("disconnected");
        cable.current = null;
      },
    };
    const subscription = cable.current.subscriptions.create(
      paramsTosend,
      handlers
    );
    return function cleanup() {
      console.log("Discconnected from");
      cable.current = null;
      subscription.unsubscribe();
    };
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const submitComment = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/messages `,
        {
          chat_room_id: channelId.id,
          user_id: user.id,
          message: comment,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setComment("");
    } catch (e) {
      console.error(e);
    }
  };
  console.log(messages);
  return (
    <Modal close={close}>
      <div className="absolute ml-9 left-0 top-0 mt-3 flex items-center">
      <Avatar w="w-32" h="h-36" name={"..."} image={image}/>
      <p className="ml-3 font-bold text-4xl">{name}</p>
      </div>
      <div className="bg-white w-11/12 h-5/6  rounded-lg mt-14 p-9 flex flex-col  bg-opacity-0 overflow-y-scroll gap-y-8">
        {messages.map((item) => (
          <ChatItem text={item.message} user_id={item.user_id} created_at={item.created_at}/>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className=" w-5/6 h-12  mt-14 flex gap-x-6">
        <Input
          type="text"
          placeholder="Review"
          name="comment"
          controller={comment}
          change={(e) => setComment(e.target.value)}
          opacity="bg-opacity-70 "
          w="w-full"
          Keypress={(e)=>{ if(e.key === 'Enter'){
            submitComment()
          }}}
        />
        <Buttons text="Comment" click={submitComment} />
      </div>
    </Modal>
  );
}
