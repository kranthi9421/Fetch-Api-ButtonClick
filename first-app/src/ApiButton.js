import React,{useState,useEffect} from 'react';
import axios from 'axios';





function ApiButton() {

 const [idFromButtonClick,setIdFromButtonClick] = useState(1)

 const [id,setId] = useState(1)

const [post,setPost] = useState({})

const getData = ()=>{
  axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
  .then(res=> {
    setPost(res.data)
  })
}

const handleClick = ()=>{
    setIdFromButtonClick(id)
}


useEffect(()=>{
  getData()
},[idFromButtonClick])

  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <h1>{post.title}</h1>
    </div>
  )
}

export default ApiButton