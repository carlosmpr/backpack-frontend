import React from 'react'


export default function InfoCard({image, text}) {
    return (
        <div className="bg-white w-11/12 p-4 md:p-0 md:w-64 md:h-48 flex md:flex-col  justify-evenly md:justify-center  items-center rounded-xl shadow-2xl backdrop-filter backdrop-blur-md    bg-opacity-50 space-y-4">
            <img src={image} alt={image} className="w-1/5 md:w-3/6"/>
            <p className="text-secondary font-bold text-2xl">{text}</p>
        </div>
    )
}
