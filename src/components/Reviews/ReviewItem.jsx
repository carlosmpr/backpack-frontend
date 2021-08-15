import React from 'react'
import Avatar from '../Avatar'
import Star from '../Star'
export default function ReviewItem({comment}) {
    return (
        <>
        <div className="flex items-center">
            <div className="w-20">
            <Avatar />
            </div>
            <div className="flex-1">
            <Star />
            <p>{comment}</p>
            </div>
            
        </div>
        <div className="w-full h-12 bg-white border-b-2 border-purple-200"/>
        </>
    )
}
