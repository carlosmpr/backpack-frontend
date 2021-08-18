import React, { useState } from "react";
import Modal from "../modals/Modal";
import TextHeader from "../Texts/TextHeaders";
import Buttons from "../Buttons/Buttons";
import axios from "axios";
import { useSelector } from "react-redux";
export default function PlanActivity({ close, id ,name, m }) {
    const token = useSelector((state) => state.login.token);
  

  const [date, setDate] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleClick = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/user_activities`,
        {
          activity_id: id,
          date: date,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setSuccess(true);
    } catch (e) {
      setError(true);
    }
  };
  return (
    <Modal close={close}>
      <div className={`bg-white w-5/12 h-4/6 ${m} rounded-lg mt-14 p-9 flex flex-col gap-y-7 justify-center items-center bg-opacity-70`}>
        {success ? (
          <div className="w-4/5 rounded-lg bg-green-400 p-4 text-center">
            <p className="text-white">Success</p>
          </div>
        ) : (
          <>
            <TextHeader title="Select the Date of your visit ?" />
            <p>{name}</p>
            <input
              type="date"
              className="p-4 rounded-xl outline-none"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Buttons text="Plan Activity" click={handleClick} />
            { error ?
            <div className="w-4/5 rounded-lg bg-red-400 p-4 text-center">
              <p className="text-white">Error</p>
            </div> : null
            }
          </>
        )}
      </div>
    </Modal>
  );
}
