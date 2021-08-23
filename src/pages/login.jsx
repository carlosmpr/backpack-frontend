import React, { useEffect, useState } from "react";
import TextHeaders from "../components/Texts/TextHeaders";
import Input from "../components/Input";
import Buttons from "../components/Buttons/Buttons";
import { useDispatch } from "react-redux";
import { setToken } from "../features/counter/loginSignupSlice";
import { useHistory } from "react-router-dom";
import Error from "../components/Errormsg/Error";
import Success from "../components/Success/Success";
export default function Login() {
  const dispacth = useDispatch();
  let history = useHistory();
  const [user, setUser] = useState({
    password: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const findToken = localStorage.getItem("token");
    if (findToken) {
      history.push("/Myaccount");
    }
  }, []);
  const handleChange = (e) => {
    setError(false)
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", user.email);
    formData.append("password", user.password);
    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",

        body: formData,
      });
      const result = await res.json();
      console.log(result.token);
      if (result.token) {
        setSuccess(true)
        setTimeout(() => {
          localStorage.setItem("token", result.token);
          dispacth(setToken(result.token));
          history.push("/Myaccount");
        }, 200);
       
      }else{
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 1000);
      }
    } catch (err) {
      setError(true)
    }
  };

  return (
    <div className="w-screen h-screen  flex flex-col  items-center justify-center space-y-4">
      <TextHeaders title="Login" />
      <form
        className="flex flex-col w-full items-center justify-center space-y-4"
        onSubmit={handleOnSubmit}
      >
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
        {success ? <Success msg="Login Succesfuly"/> : <Buttons text="Login" />}
        
        {error ? <Error msg="Check email and Password" /> : null}
      </form>
    </div>
  );
}
