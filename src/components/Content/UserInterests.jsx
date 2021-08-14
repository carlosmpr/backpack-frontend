import React from 'react'

import MiniBadge from '../Cards/MiniBadge'
export default function UserInterests({hiking, swimming, eating, camping, touring, walking}) {
    const interests = [{name:"hiking", like: hiking},{ name:"swimming", like:swimming} ,{name:"eating" , like: eating}, {name:"camping", like:camping},{name: "touring", like:touring} , {name:"walking", like:walking }]
    const filter_interests = interests.filter(interest => interest.like )  
    return (
        <div className="w-full ">
        <p className="text-center">Interests</p>
        <div className="flex w-full flex-wrap gap-x-2 gap-y-2 items-center">
           
           {
               filter_interests.map(item => <MiniBadge text={item.name} key={item.name}/>)
}
        </div>
        </div>
    )
}
