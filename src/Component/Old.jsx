import React, { useEffect, useState } from 'react'
import { fetchApi } from '../Api/axios';

const Old = () => {
  const [posts, setPosts] = useState([]);
  
  const getPostData = async () =>{
    try {
        const res = await fetchApi();
        res.status === 200 ? setPosts(res.data) : [];
        console.log(res)
    } catch (error) {
        console.log(error);
        return [];
    }
  }

  useEffect(() =>{
    getPostData();
  },[])
  return (
    <main className="main-content">
      <h2>About Component (Full Width)</h2>
      {posts?.map((elem) =>{
          const {id, title, body} = elem;
          return(
            <p key={id} style={{borderLeft:'5px solid #000',textAlign:'left',padding:'20px',margin:'0 auto',marginTop:'50px', backgroundColor:'#c6c6c6', maxWidth:'70%'}}>
              <span style={{display:'block', fontWeight:'bold'}}>{title}</span>
              <span style={{display:'block',marginTop:'20px'}}>{body}</span>
            </p>
          )
      })}
    </main>
  )
}

export default Old
