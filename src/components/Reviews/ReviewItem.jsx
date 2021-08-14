import React from 'react'
import Avatar from '../Avatar'
import Star from '../Star'
export default function ReviewItem({comment}) {
    return (
        <div className="flex items-center">
            <Avatar />
            <div>
            <Star />
            <p>{comment}</p>
            </div>
        </div>
    )
}
