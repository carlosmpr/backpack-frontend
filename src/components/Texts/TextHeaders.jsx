import React from 'react'

export default function TextHeaders({title}) {
    return (
        <h1 className="text-4xl md:text-6xl text-primary font-bold text-center">
          {title}
        </h1>
    )
}
