import React,{useState,useEffect} from 'react';
import axios from 'axios';





function ApiInput() {

  const [id,setId] = useState(1)

const [post,setPost] = useState({})

const getData = ()=>{
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res=> {
    setPost(res.data)
  })
}


useEffect(()=>{
  getData()
},[id])

  return (
    <div>
       <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <h1>{post.title}</h1>
    </div>
  )
}

export default ApiInput