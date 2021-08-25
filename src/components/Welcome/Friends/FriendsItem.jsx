import React from 'react'

export default function FriendsItem({text, image}) {
    return (
        <div className="flex flex-col justify-center items-center bg-primary  rounded-xl shadow-2xl backdrop-filter backdrop-blur-md bg-opacity-20 p-4">
        <img src={image} alt={image} className="w-28" />
        <p>{text} </p>
        </div>
    )
}
