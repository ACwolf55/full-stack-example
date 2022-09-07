import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AddMessage = () => {
    const navigate = useNavigate()

    const [message,setmessage] = useState('')

    const postmessage =()=>{
        axios.post('http://localhost:5000/postMessage',{message}).then((res)=>{
            console.log(res.data)
            navigate('/')
        })

    }


  return (
    <div className='addMessage'>

    <input onChange={(e)=>setmessage(e.target.value)}></input>

    <button onClick={postmessage}>submit</button>


    </div>
  )
}
