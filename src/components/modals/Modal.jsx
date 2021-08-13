import React from "react";

export default function Modal() {
  return (
    <div className="h-screen  w-screen top-0 right-5  p-9 absolute rounded-tr-lg shadow-3xl w-1/5  flex  flex-col items-center  backdrop-filter backdrop-blur-lg bg-opacity-25  z-50">
 <div className=" cursor-pointer z-50" >
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
        <input type="date" className="my-12 p-9 rounded-xl"/>

    </div>
  );
}
