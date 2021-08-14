import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import axios from "axios";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
export default function Locations() {
//   const token = useSelector((state) => state.login.token.token);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJjYXJsb3NAZW1haWwuY29tIiwibmFtZSI6IkNhcmxvcyIsImxhc3RfbmFtZSI6IlBvbGFuY28iLCJwaG9uZSI6Ijk5OS05OTktOTk5OSIsInN3aW1taW5nIjp0cnVlLCJoaWtpbmciOnRydWUsIndhbGtpbmciOnRydWUsImVhdGluZyI6dHJ1ZSwidG91cmluZyI6dHJ1ZSwiY2FtcGluZyI6dHJ1ZX0.4YFlAeSlwtpV8K26PXzLQ7eGW56V-6CLhrJbyiKEUFE"
  useEffect(() => {
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
    })();
  }, []);
  if(loading){
      return <p>Loading ....</p>
  }
  return (
    <>
      <Banner msg={"Places"} />
      {data.map((item) => <Card key={item.name} {...item} />)}
    </>
  );
}
