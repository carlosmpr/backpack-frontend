import React from "react";

export default function NavItems(props) {
  return (
    <div className="flex self-start items-center space-x-2">
     {props.children}
      <p className="font-mono  text-gray-400  text-xl">{props.info} </p>
    </div>
  );
}



