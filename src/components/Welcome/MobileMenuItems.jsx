import React from "react";
import Modal from "../modals/Modal";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Buttons from "../Buttons/Buttons";
export default function MenuItems({ close }) {
  let history = useHistory();
  return (
    <Modal close={close}>
      <ul className="flex flex-col ml-12 w-full h-full bg-primary justify-evenly items-center  rounded-lg shadow-3xl  text-white  backdrop-filter backdrop-blur-lg bg-opacity-80  z-50">
        <a href="#about" onClick={() => close()}>
          <li className="font-bold text-3xl">About</li>
        </a>
        <a href="#features">
          {" "}
          <li className="font-bold text-3xl">Features</li>
        </a>
        <Link to="login">
          <li className="font-bold text-3xl">Login</li>
        </Link>
        <li>
          <Buttons padding="p-2" click={() => history.push("Signup")}>
            <p className="font-bold text-3xl">Register</p>
          </Buttons>
        </li>
      </ul>
    </Modal>
  );
}
