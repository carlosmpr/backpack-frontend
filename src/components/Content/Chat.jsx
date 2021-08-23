import React, { useEffect, useState, useRef } from "react";
import { createConsumer } from "@rails/actioncable";
import Modal from "../modals/Modal";
import Input from "../Input";
import Buttons from "../Buttons/Buttons";
import axios from "axios";
export default function Chat({ close, channelId , token}) {
  const [messages, setMessages] = useState(channelId.messages);
  const [comment, setComment] = useState("");
  const cable = useRef();
  const messagesEndRef = useRef(null)
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
        scrollToBottom()
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
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const submitComment = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/messages `,
        {
          chat_room_id: channelId.id,
          user_id: 1,
          message: comment,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setComment("")
    } catch (e) {
      console.error(e);
    }
  };
console.log(messages)
  return (
    <Modal close={close}>
      <div className="bg-white w-5/12 h-4/6  rounded-lg mt-14 p-9 flex flex-col  bg-opacity-70 overflow-y-scroll gap-y-8">
        {messages.map((item) => (
          <p>{item.message}</p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className=" w-5/12 h-12  mt-14 flex gap-x-6">
        <Input
          type="text"
          placeholder="Review"
          name="comment"
          controller={comment}
          change={(e) => setComment(e.target.value)}
          opacity="bg-opacity-70 "
          w="w-3/4"
        />
        <Buttons text="Comment" click={submitComment} />
      </div>
    </Modal>
  );
}
