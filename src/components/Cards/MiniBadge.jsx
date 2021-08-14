import React,{useState} from 'react'

export default function MiniBadge({text}) {
     
    return (
        <div className={`p-3 w-20 rounded-xl outline-none shadow-lg backdrop-filter backdrop-blur-lg  "bg-primary bg-opacity-70 text-white" `} >
            <p>{text}</p>
        </div>
    )
}
