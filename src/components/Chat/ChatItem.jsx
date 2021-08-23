import React from 'react'
import {useSelector} from 'react-redux'
export default function ChatItem({text, user_id,created_at}) {
    const user = useSelector((state) => state.login.user);
    const newDate = new Date(created_at)
    console.log(user)
    
    return (
        <>
        <span className={`text-xs text-gray-400 -mb-8 ${ user_id === user.id ?  'self-end' :'' } `}>Send:{newDate.toLocaleDateString()}</span>
        <div className={`w-max rounded-lg ${ user_id === user.id ? 'bg-green-400  self-end' :'bg-blue-400' }  p-4 text-center bg-opacity-70 shadow-lg`}>
           
            <p className="text-white text-xl">{text}</p>
            
          </div>
           
           </>
    )
}
