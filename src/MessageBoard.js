import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function MessageBoard() {

    const [messages,setMessage] = useState([])

    useEffect(()=>{

        axios.get('http://localhost:5000/getMessages').then((res)=>{

            console.log(res.data)
            setMessage(res.data)
        })


    },[])




  return (
    <div className='MessageBoard'>
        <header> Message Board</header>
        {
          messages.length==0 ? <p>loading</p>  :
          
          messages.map((item)=>{
            return(

                <p>{item.post_body}</p>

            )

          })

        }

        <Link to='/addMessage'>
            <p>add message</p>
        </Link>

    </div>
  )
}
