import { useQuery } from '@tanstack/react-query'
import React  from 'react'
import { fetchApi } from '../Api/axios';

const About = () => {

  const getPostData = async () =>{
      try {
          const res = await fetchApi();
          //console.log(res.data)
          return res.status === 200 ? res.data : [];
          //console.log(res)
      } catch (error) {
          console.log(error);
          return [];
      }
    }

  const {data} = useQuery({
      queryKey:['posts'],
      queryFn:getPostData
    })
  return (
    <main className="main-content">
      <h2>About Component (Full Width)</h2>
      {data?.map((elem) =>{
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

export default About
