import React from 'react'
import Modal from '../modals/Modal'
import FriendRequestItem from './FirendReuestItem';
export default function FriendRequest({close, id, requests}) {
    return (
      <Modal close={close} >
          <div className="bg-white w-5/12 h-4/6  rounded-lg mt-14 p-9 flex flex-col  bg-opacity-70 overflow-y-scroll gap-y-8">
            {requests.map(item => <FriendRequestItem key={item.name} {...item}/>)}
          </div>
        </Modal>
    )
}
