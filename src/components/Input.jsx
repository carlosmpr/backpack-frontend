import React from 'react'

export default function Input({type, change, placeholder, name, controller , w="w-2/5", opacity="bg-opacity-40"}) {
    return (
        <input name={name} type={type} placeholder={placeholder} onChange={change} value={controller} className={`p-3 ${w} rounded-xl outline-none shadow-lg backdrop-filter backdrop-blur-lg bg-white  ${opacity} focus:ring-2 focus:ring-purple-600`}/>
    )
}
