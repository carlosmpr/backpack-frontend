import React from "react";


export default function LongCard({ msg }) {
  return (
      <>
    <div className="col-start-3 col-span-8 row-span-0 h-24 flex  items-center justify-center  bg-white gap-4 rounded-xl shadow-md shadow-3xl backdrop-filter backdrop-blur-lg bg-opacity-50">
      <h1 className="text-4xl text-blue-800  font-bold">{msg}</h1>
    </div>
    
    </>
  );
}
