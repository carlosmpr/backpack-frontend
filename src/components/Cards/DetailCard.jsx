import React, { useState } from "react";
import Reviews from "../Reviews/Reviews";
import PlanActivity from "../PlanActivity/PlanActivity";
import Star from "../Star";
export default function DetailCard({
  close,
  name,
  description,
  directions,
  state,
  id,
  date,
}) {
  const [show, setShow] = useState(false);
  const [plan, setPlan] = useState(false);
  const closeReviews = () => {
    setShow(false);
  };

  const closePlan = () => {
    setPlan(false);
  };

  return (
    <>
      {plan ? (
        <PlanActivity close={closePlan} id={id} name={name} m="mr-96" />
      ) : null}
      {show ? <Reviews close={closeReviews} id={id} /> : null}
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
            {name}
          </h1>

          <h3 className="text-lg font-bold">Likes</h3>
          <Star />
          <p className="text-justify">
            <h3 className="text-lg font-bold">Description</h3>
            {description}
          </p>
          <p className="text-justify">
            <h3 className="text-lg font-bold">Location</h3>
            {`${state} ${directions}`}
          </p>
          <div className="flex w-full justify-around">
            {date ? (
              <p className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer">
                date:{date}
              </p>
            ) : (
              <p
                className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer"
                onClick={() => {
                  setShow(false);
                  setPlan(!plan);
                }}
              >
                {plan ? "Unplan" : "Plan"}
              </p>
            )}

            <p
              className="text-2xl text-blue-800 hover:text-red-400 cursor-pointer"
              onClick={() => {
                setPlan(false);
                setShow(!show);
              }}
            >
              {show ? "Close" : "Reviews"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
