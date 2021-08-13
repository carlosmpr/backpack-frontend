import React from "react";

export default function DetailCard({ close }) {
  return (
    <div
      className="h-screen rounded-3xl w-2/6 top-0 right-5  absolute rounded-tr-lg shadow-3xl w-1/5  flex  flex-col items-center  backdrop-filter backdrop-blur-lg bg-opacity-75 bg-white z-50"
      style={{ marginTop: "-5px" }}
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
        <div className="h-2/4 w-4/5 bg-white self-center rounded-3xl shadow-2xl z-50"></div>
        <h1 className="text-4xl text-blue-800 self-center font-bold">
          Activity Name
        </h1>
        <div className="flex w-full justify-around">
          <h3 className="text-lg font-bold">Description</h3>
          <h3 className="text-lg font-bold">Reviews</h3>
          <h3 className="text-lg font-bold">Location</h3>
        </div>
        <p className="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{" "}
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
