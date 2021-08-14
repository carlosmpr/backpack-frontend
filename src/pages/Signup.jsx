import React, { useState } from "react";
import TextHeaders from "../components/Texts/TextHeaders";
import Input from "../components/Input";
import Badge from "../components/Cards/Badge";
import Buttons from "../components/Buttons/Buttons";
import {useDispatch} from 'react-redux'
import { setToken } from "../features/counter/loginSignupSlice";
import { useHistory } from "react-router-dom";
import axios from "axios"
export default function Signup() {
    const dispacth = useDispatch()
    let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    last_name: "",
    password: "",
    email: "",
    phone:""
  });
  const [interests, setInterests] = useState({
    hiking: false,
    swimming: false,
    walking: false,
    touring: false,
    camping: false,
    eating: false,
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
      try {
          const body = {...user, ...interests}
          const res = await axios.post('http://127.0.0.1:5000/users', body)
          dispacth(setToken(res.data))
          history.push("/Myaccount");
        
      } catch (err) {
          console.log(err)
          
      }
  }
  console.log(user);
  console.log(interests)
  return (
    <div className="w-screen h-screen flex flex-col items-center space-y-4">
      <TextHeaders title="Join Now" />
      <Input
        type="text"
        placeholder="Name"
        name="name"
        controller={user.name}
        change={handleChange}
      />
      <Input
        type="text"
        placeholder="Last name"
        name="last_name"
        controller={user.last_name}
        change={handleChange}
      />
      <Input
        type="text"
        placeholder="Email"
        name="email"
        controller={user.email}
        change={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        controller={user.password}
        change={handleChange}
      />
      <Input
        type="number"
        placeholder="Phone"
        name="phone"
        controller={user.phone}
        change={handleChange}
      />
      <h2 className="font-semibold text-secondary text-2xl">Interests</h2>
      <div className="flex w-2/5 flex-wrap justify-center space-x-2 space-y-1">
        <Badge text="Hiking" funClick={()=> setInterests({...interests, hiking:!interests.hiking})}/>
        <Badge text="Swimming" funClick={()=> setInterests({...interests, swimming:!interests.swimming})}/>
        <Badge text="Eating" funClick={()=> setInterests({...interests, eating:!interests.eating})}/>
        <Badge text="Walking" funClick={()=> setInterests({...interests, walking:!interests.walking})}/>
        <Badge text="Camping" funClick={()=> setInterests({...interests, camping:!interests.camping})}/>
        <Badge text="Touring" funClick={()=> setInterests({...interests, touring:!interests.touring})}/>
      </div>
      <Buttons text="Register" click={onSubmit}/>
    </div>
  );
}
