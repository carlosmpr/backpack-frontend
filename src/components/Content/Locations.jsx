import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
export default function Locations() {
//   const token = useSelector((state) => state.login.token.token);
  const colors =["red", 'green' , 'blue', 'yellow', 'purple', 'indigo']
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
 const token  = useSelector(state => state.login.token)
  useEffect(() => {
    if(token){
    (async function () {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/locations `, {
          headers: {
            Authorization: token,
          },
        });

        setData(response.data)
        setLoading(false)
      } catch (e) {
        console.error(e);
      }
    })()};
  }, [token]);
  

  console.log(token)
  
  return (
    <>
      <Banner msg={"Places"} />
      {data.map((item,index) => <Card key={item.name} {...item} color={colors[index]}/>)}
    </>
  );
}
