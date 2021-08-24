import React from 'react'

export default function DashBoard({title , value, color="bg-primary"}) {
    return (
        <p className={`w-32 h-24 ${color} p-4 relative rounded-xl shadow-md backdrop-filter backdrop-blur-lg bg-opacity-70 hover:bg-opacity-75 text-gray-500 text-lg`}><span className="absolute left-1 text-white"> {title} </span> <span className="absolute bottom-2 text-3xl font-bold right-2 text-white">{value}</span></p>
    )
}
