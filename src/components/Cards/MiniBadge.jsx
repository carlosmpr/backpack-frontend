import React from 'react'

export default function MiniBadge({text}) {
     
    return (
        <div className={`p-2 w-20 rounded-xl outline-none shadow-lg backdrop-filter backdrop-blur-lg  bg-primary bg-opacity-50 text-white text-center`} >
            <p className="text-sm">{text}</p>
        </div>
    )
}
