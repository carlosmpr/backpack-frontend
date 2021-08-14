import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePanel } from '../../features/counter/locationsSlice';
export default function NavItems(props) {
  const dispatch = useDispatch()

  return (
    <div className="flex self-start items-center space-x-2 cursor-pointer"  onClick={()=> dispatch(changePanel(props.info))}>
     {props.children}
      <p className="font-mono  text-gray-400  text-xl">{props.info} </p>
    </div>
  );
}



