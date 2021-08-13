import React from "react";

export default function Banner({ msg, image }) {
  return (
    <div className="relative col-start-2 col-span-10 row-span-0 h-64 flex  items-center justify-center  bg-indigo-500 gap-4 rounded-xl shadow-md shadow-3xl backdrop-filter backdrop-blur-lg bg-opacity-50">
      <h1 className="text-4xl absolute text-black-800  font-bold">{msg}</h1>
    </div>
  );
}
