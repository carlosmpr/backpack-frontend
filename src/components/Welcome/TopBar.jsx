import React from "react";
import backpack from "../../assets/images/backpack.svg";
import Buttons from "../Buttons/Buttons";
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";
export default function TopBar() {
  let history = useHistory();
  return (
    <div className="w-full h-12  flex flex-row bg-white backdrop-filter backdrop-blur-3xl bg-opacity-25  z-50 rounded-lg shadow-md justify-around items-center font-semibold text-lg">
      <div className="flex items-center">
        <img src={backpack} alt="backpack" className="w-10" />
        <p className="text-primary">Backpack</p>
      </div>
      <ul className="flex justify-evenly items-center w-3/6 text-secondary">
        <a href="#about"><li>About</li></a>
       <a href="#features"> <li>Features</li></a>
        <Link to="login"><li>Login</li></Link>
        <li >
        <Buttons padding="p-2" click={()=> history.push('Signup')}>
          <p>Register</p>
          </Buttons>
        </li>
      </ul>
    </div>
  );
}
