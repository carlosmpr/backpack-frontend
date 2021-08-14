import React,{useState} from 'react'

export default function Badge({text, funClick}) {
     const [clicked, setClicked] = useState(false)

     const handleClick = () => {
         setClicked(!clicked)
         funClick()
     }
    return (
        <div className={`p-3  rounded-xl outline-none shadow-lg backdrop-filter backdrop-blur-lg ${clicked ? "bg-primary bg-opacity-70 text-white" : "bg-white bg-opacity-20" }  cursor-pointer`} onClick={handleClick}>
            <p>{text}</p>
        </div>
    )
}
