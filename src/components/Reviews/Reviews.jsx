import React,{useState, useEffect} from 'react'
import Modal from '../modals/Modal'
import { useSelector } from "react-redux";
import axios from 'axios'
import ReviewItem from './ReviewItem';
import Input from '../Input'
import Buttons from '../Buttons/Buttons'
export default function Reviews({close, id}) {
    //   const token = useSelector((state) => state.login.token.token);
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJjYXJsb3NAZW1haWwuY29tIiwibmFtZSI6IkNhcmxvcyIsImxhc3RfbmFtZSI6IlBvbGFuY28iLCJwaG9uZSI6Ijk5OS05OTktOTk5OSIsInN3aW1taW5nIjp0cnVlLCJoaWtpbmciOnRydWUsIndhbGtpbmciOnRydWUsImVhdGluZyI6dHJ1ZSwidG91cmluZyI6dHJ1ZSwiY2FtcGluZyI6dHJ1ZX0.4YFlAeSlwtpV8K26PXzLQ7eGW56V-6CLhrJbyiKEUFE"

  useEffect(() => {
      (async function () {
        try {
          const response = await axios.post(`http://127.0.0.1:5000/activity/detail`,{
            activity_id:id
          }, {
            headers: {
              Authorization: token,
            },
          });
          console.log(response.data.activity_reviews)
          setData(response.data.activity_reviews)
          setLoading(false)
        } catch (e) {
          console.error(e);
        }
      })();
    }, []);


  const submitReview = () => {
    
  }
  if(loading){
      return <p>Loading ....</p>
  }
    return (
      <Modal close={close} >
          <div className="bg-white w-5/12 h-4/6 mr-96 rounded-lg mt-14 p-9 flex flex-col items-center bg-opacity-70">
            {data.map(item => <ReviewItem key={item.name} {...item}/>)}
          </div>
          <div className=" w-5/12 h-12 mr-96 mt-14 flex gap-x-6">
            <Input  opacity="bg-opacity-none " w="w-3/4"/>
            <Buttons text="Comment"/>
          </div>
        </Modal>
    )
}
