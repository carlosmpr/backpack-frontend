import React from "react";

export default function Card({ msg, image, color }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className=" relative  col-span-4 row-span-0 flex h-72  items-center justify-center  bg-purple-700  rounded-xl  shadow-3xl backdrop-filter backdrop-blur-lg bg-opacity-25 overflow-hidden shadow-md "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={image}
        className="w-full h-full"
        alt={msg}
      />

      <div
        className={`w-full h-full transition-all  ${
          hover ? "bg-transparent" : `bg-${color}-300`
        }  absolute bg-opacity-50 `}
      ></div>
      <div class="absolute bottom-0 right-0  p-5">
        {" "}
        <h1 className={`text-4xl ${hover ? "text-white" : `text-gray-800`}  font-bold`}>{msg}</h1>
      </div>
    </div>
  );
}
