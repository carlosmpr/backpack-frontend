import React from 'react'


export default function InfoCard({image, text}) {
    return (
        <div className="bg-white w-64 h-48 flex flex-col justify-center  items-center rounded-xl shadow-2xl backdrop-filter backdrop-blur-md    bg-opacity-50 space-y-4">
            <img src={image} alt={image} className="w-3/6"/>
            <p className="text-secondary font-bold text-2xl">{text}</p>
        </div>
    )
}
