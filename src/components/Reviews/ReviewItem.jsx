import React from 'react'
import Avatar from '../Avatar'
import Star from '../Star'
export default function ReviewItem({comment, user}) {
 const {featured_image , avatar} = user
    return (
        <>
        <div className="flex items-center">
            <div className="w-20">
            <Avatar w="w-20" image={ featured_image === "" ? avatar :featured_image.url}/>
            </div>
            <div className="flex-1 ml-6">
            <Star />
            <p>{user.name}</p>
            <p>{comment}</p>
            </div>
            
        </div>
        <div className="w-full border-b-2 border-purple-200"/>
        </>
    )
}
