import React from "react";
import { useDispatch } from "react-redux";
import {
  changePanel,
  selectActivity,
} from "../../features/counter/locationsSlice";

export default function Card({ name, image, color, id }) {
  const dispatch = useDispatch();

  const [hover, setHover] = React.useState(false);
  return (
    <div
      className=" relative my-4 col-span-12  md:col-span-4 row-span-0 flex h-72  items-center justify-center  bg-purple-700  cursor-pointer rounded-xl  shadow-3xl backdrop-filter backdrop-blur-lg bg-opacity-25 overflow-hidden shadow-md "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        dispatch(selectActivity(id));
        dispatch(changePanel("Activities"));
      }}
    >
      <img src={image} className="w-full h-full" alt={image} />

      <div
        className={`w-full h-full transition-all  ${
          hover ? "bg-transparent" : `bg-${color}-300`
        }  absolute bg-opacity-50 `}
      ></div>
      <div class="absolute bottom-0 right-0  p-5">
        {" "}
        <h1
          className={`text-4xl ${
            hover ? "text-white" : `text-gray-800`
          }  font-bold`}
        >
          {name}
        </h1>
      </div>
    </div>
  );
}
