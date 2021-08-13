import React from "react";
import Avatar from "../Avatar";
export default function UserCard({ close }) {
  return (
    <div
      className=" h-96 w-full rounded-3xl  col-span-4 row-span-0 top-0 right-5  rounded-3xl shadow-3xl w-1/5  flex  flex-col items-center  backdrop-filter backdrop-blur-lg bg-opacity-75 bg-white overflow-hidden"
     
    >
      <div className="w-full h-5/6 absolute">
        <svg
          width="100%"
          height="auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 -120"
        >
          <path
            fill="#5000ca"
            fill-opacity="1"
            d="M0,160L80,176C160,192,320,224,480,245.3C640,267,800,277,960,282.7C1120,288,1280,288,1360,288L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        
      </div>
      <div className="h-full w-full  p-9 flex flex-col space-y-8 ">
        <div className=" cursor-pointer z-50" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <Avatar />
        
        <div className="flex w-full justify-around">
        <h1 className="text-4xl text-blue-800 self-center font-bold z-50">
          Activity Name
        </h1>
        </div>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
         
        </p>
        <div className="flex w-full justify-around">
          <p className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer">
            Add
          </p>

          <p className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer">
            Review
          </p>
        </div>
      </div>
    </div>
  );
}
