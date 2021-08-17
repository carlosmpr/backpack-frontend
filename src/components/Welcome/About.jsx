import React from 'react'
import TextHeaders from '../Texts/TextHeaders'

export default function About() {
    return (
        <div className="w-screen h-96 flex flex-col items-center space-y-4" id="about">
            <TextHeaders title="About" />
            <div className="w-4/6 font-bold text-secondary text-center text-xl">
            <p><span className="text-primary">Backpack</span> is an app the allows users to <span className="text-primary">plan ahead activities</span> in different locations on the world, you can <span className="text-primary">invite friends</span> to your activites , See other users review, <span className="text-primary">like and leave a comment</span> and also Save activities for other visits </p>
            </div>
        </div>
    )
}
