import React,{useEffect, useState} from "react";
import NavItems from "./NavItems/NavItems";
import Buttons from "./Buttons/Buttons";
import axios from 'axios'
export default function Navbar() {
  
const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwiZW1haWwiOiJ0ZXN0ODgyQGVtYWlsIiwibmFtZSI6InRlc3Q4ODIiLCJsYXN0X25hbWUiOm51bGwsInBob25lIjoiOTk5NDQ0NTU1NSIsInN3aW1taW5nIjp0cnVlLCJoaWtpbmciOnRydWUsIndhbGtpbmciOnRydWUsImVhdGluZyI6dHJ1ZSwidG91cmluZyI6dHJ1ZSwiY2FtcGluZyI6dHJ1ZX0.vUAC2DXGcuwge9jpsb2LfkancxbAB2u1jYtYecAIXIM"
const [user, setUser] = useState({featured_image:''})
useEffect(() => {
  (async function () {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/me `, {
        headers: {
          Authorization: token,
        },
      });
      setUser(response.data)
     
    } catch (e) {
      console.error(e);
    }
  })();
}, []);
  return (
    <div className="h-screen rounded-tr-lg shadow-2xl w-1/5 bg-white p-9 flex  flex-col items-center space-y-11 backdrop-filter backdrop-blur-lg bg-opacity-40" >
      <img
        className="inline-block h-22 w-22 rounded-full ring-2 ring-white"
        src={user.featured_image.url}
        alt=""
      />
      <p className="font-sans font-bold ">My name </p>
      <NavItems info={"Locations"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      </NavItems>

      <NavItems info={"Users"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </NavItems>

      <NavItems info={"MyActivity"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5  text-red-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </NavItems>

      <NavItems info={"MyFriends"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </NavItems>

      <NavItems info={"Acount"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </NavItems>
      <Buttons text="Sign Out"/>
    </div>
  );
}
