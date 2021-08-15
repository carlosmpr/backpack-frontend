import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePanel } from '../../features/counter/locationsSlice';
export default function NavItems(props) {
  const dispatch = useDispatch()
  const seleccted = useSelector((state)=> state.location.nav)
  return (
    <div className={`w-full flex self-start ${seleccted === props.info ? "bg-primary text-white rounded-md " :"text-gray-500"}   items-center space-x-2  cursor-pointer hover:bg-primary hover:text-white rounded-md`}  onClick={()=> dispatch(changePanel(props.info))}>
     {props.children}
      <p className="font-mono    text-xl">{props.info} </p>
    </div>
  );
}



