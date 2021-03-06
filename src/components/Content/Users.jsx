import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import { useSelector } from "react-redux";
import UserCard from '../Cards/UserCard'
export default function Users() {
  const token  = useSelector(state => state.login.token)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
// const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJjYXJsb3NAZW1haWwuY29tIiwibmFtZSI6IkNhcmxvcyIsImxhc3RfbmFtZSI6IlBvbGFuY28iLCJwaG9uZSI6Ijk5OS05OTktOTk5OSIsInN3aW1taW5nIjp0cnVlLCJoaWtpbmciOnRydWUsIndhbGtpbmciOnRydWUsImVhdGluZyI6dHJ1ZSwidG91cmluZyI6dHJ1ZSwiY2FtcGluZyI6dHJ1ZX0.4YFlAeSlwtpV8K26PXzLQ7eGW56V-6CLhrJbyiKEUFE"
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/users `, {
          headers: {
            Authorization: token,
          },
        });
        console.log(response.data)
        setData(response.data)
        setLoading(false)
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  if(loading){
      return <p>Loading ....</p>
  }
  return (
    <>
      <Banner msg={"Connect with Users"} />
      {data.map((item) => <UserCard key={item.name } {...item} token={token}/>)}
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
