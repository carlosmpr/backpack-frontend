import React from "react";

export default function Success({ msg }) {
  return (
    <div
      className={`w-1/4 rounded-lg  bg-green-400 p-4 text-center shadow-xl bg-opacity-80`}
    >
      <p className="text-white">{msg}</p>
    </div>
  );
}
