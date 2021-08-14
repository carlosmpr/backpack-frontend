import React, { useState, useEffect } from "react";
import Banner from "../Banner";
import { useSelector } from "react-redux";
import axios from "axios";
import ActivityCard from "../Cards/ActivityCard";
export default function Activities() {
  // const token = useSelector((state) => state.login.token.token);

  const place = useSelector((state) => state.location.activity);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJjYXJsb3NAZW1haWwuY29tIiwibmFtZSI6IkNhcmxvcyIsImxhc3RfbmFtZSI6IlBvbGFuY28iLCJwaG9uZSI6Ijk5OS05OTktOTk5OSIsInN3aW1taW5nIjp0cnVlLCJoaWtpbmciOnRydWUsIndhbGtpbmciOnRydWUsImVhdGluZyI6dHJ1ZSwidG91cmluZyI6dHJ1ZSwiY2FtcGluZyI6dHJ1ZX0.4YFlAeSlwtpV8K26PXzLQ7eGW56V-6CLhrJbyiKEUFE";

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/locations/${place}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  console.log(data);
  if (loading) {
    return <p>Loading ....</p>;
  }
  return (
    <>
      <Banner msg="Activities" />
      {data.activities.map((item) => (
        <ActivityCard key={item.name} {...item} />
      ))}
    </>
  );
}
