import React from "react";

export default function Avatar({name, w="w-14",h="h-20",image="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}) {
  return (
    <div className={`${w} ${h}  flex flex-col  items-center justify-center z-40 overflow-hidden`}>
      <img
        className="inline-block w-full h-56  rounded-full ring-2 ring-white"
        src={image}
        alt=""
      />
      <p className="font-sans font-bold text-gray-700">{name} </p>
    </div>
  );
}
