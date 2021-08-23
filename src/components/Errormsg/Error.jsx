import React from 'react'

export default function Error({msg}) {
    return (
        <div className={`w-1/4 rounded-lg  bg-red-400 p-4 text-center shadow-xl bg-opacity-80`}>
            <p className="text-white">{msg}</p>
          </div>
    )
}
