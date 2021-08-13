import React from "react";

export default function Avatar() {
  return (
    <div className=" relative  col-span-3 row-span-0 flex flex-col h-72  items-center justify-center ">
      <img
        className="inline-block  rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <p className="font-sans font-bold text-gray-700">My name </p>
    </div>
  );
}
