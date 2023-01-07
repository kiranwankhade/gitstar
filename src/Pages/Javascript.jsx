import { Flex, Heading } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';

const Javascript = () => {
  const [allData,setAllData]= useState([]);
  const [loading,setLoading] = useState(false)
  const [page, setPage] = useState(1);
 
   const getData = async (page) => {
    setLoading(true)
     await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&desc=stargazers_count&per_page=10&page=${page}`).then((res)=>{
         // console.log(res.data.items);
         setAllData(res.data.items)
         setLoading(false)
     }).catch((err)=>{
         console.log(err)
         setLoading(false)
     })
   }
 
 
 
   useEffect(()=>{
     getData(page)
   },[page])
     
   console.log("allData",allData)
 
   const handlePageChange = (val) => {
     const changeBy = page + val;
     setPage(changeBy);
   };
 
   return loading? <h1>Loading...</h1> : (
     <div style={{display:'flex', flexDirection:'column', fontSize:'20px',gap:'20px' ,alignItems:'center',padding:'5px',marginTop:'20px'}}>
 
     <Heading style={{color:'#aaf36a',width:'350px' , border:'1px dashed red',borderRadius:'10px', padding:'6px'}}>JAVASCRIPT Data</Heading>
 
     <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)',gap:'35px' ,justifyContent:'center',padding:'5px'}}>
       {
       allData.map((el)=>(
         <div key={el.id}>
         
           <Cards el={el}/>
           
         </div>
       ))
     }
     </div>
     <br />
     <br />
     <Flex gap={'20px'}>
     <button onClick={() => handlePageChange(-1)}>PREV</button>
     <button >{page}</button>
     <button onClick={() => handlePageChange(1)}>NEXT</button>
     </Flex>
    
     </div>
   )
 
}


export  default Javascript