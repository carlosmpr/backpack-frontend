import React,{useState, useEffect} from 'react'
import Modal from '../modals/Modal'
import { useSelector } from "react-redux";
import axios from 'axios'
import ReviewItem from './ReviewItem';
import Input from '../Input'
import Buttons from '../Buttons/Buttons'
export default function Reviews({close, id}) {
  const token  = useSelector(state => state.login.token)
    
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [comment, setComment] =useState("")
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJjYXJsb3NAZW1haWwuY29tIiwibmFtZSI6IkNhcmxvcyIsImxhc3RfbmFtZSI6IlBvbGFuY28iLCJwaG9uZSI6Ijk5OS05OTktOTk5OSIsInN3aW1taW5nIjp0cnVlLCJoaWtpbmciOnRydWUsIndhbGtpbmciOnRydWUsImVhdGluZyI6dHJ1ZSwidG91cmluZyI6dHJ1ZSwiY2FtcGluZyI6dHJ1ZX0.4YFlAeSlwtpV8K26PXzLQ7eGW56V-6CLhrJbyiKEUFE"

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
          
          setData(response.data.activity_reviews)
          setLoading(false)
        } catch (e) {
          console.error(e);
        }
      })();
    }, []);


  const submitReview = async () => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/activity_reviews`,{
        activity_id:id,
        comment:comment,
        likes:5
      }, {
        headers: {
          Authorization: token,
        },
      });
      setComment('')
      setData([...data, response.data])
     } catch (e) {
        console.error(e);
      }
  }
 
  
  console.log(comment)
  if(loading){
      return <p>Loading ....</p>
  }
    return (
      <Modal close={close} z={"z-30 md:z-10"}>
          <div className="bg-white md:w-5/12 ml-10 md:h-4/6 md:mr-96 rounded-lg md:mt-14 p-9 flex flex-col  bg-opacity-70 overflow-y-scroll gap-y-8 ">
            {data.map(item => <ReviewItem key={item.name} {...item}/>)}
          </div>
          <div className=" w-10/12 md:w-5/12 h-12 md:mr-80 mt-14 flex gap-x-6">
            <Input type="text" placeholder="Review" name="comment" controller={comment} change={(e)=> setComment(e.target.value)} opacity="bg-opacity-70 " w="w-3/4"   Keypress={(e)=>{ if(e.key === 'Enter'){
            submitReview()
          }}}/>
            <Buttons text="Comment" click={submitReview}/>
          </div>
          
        </Modal>
    )
}
