import { Flex, Text,Image } from '@chakra-ui/react'
import React from 'react'

function Cards({el}) {
    
  return (
    <div style={{display:'flex', flexDirection:'column',gap:'20px' ,justifyContent:'center',padding:'10px' ,boxShadow: "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",borderRadius:'10px', height:'400px'}}>

    <Image style={{
          margin: "auto",
          borderRadius:'10px'
        }} src={el.owner.avatar_url} alt='elImage' 
        height={"100px"} width={"200px"}/>
    
    {/* <img style={{width:'200px' ,height:'100px',margin:'auto'}} src={el.owner.avatar_url} alt='elImage' /> */}

    <Text style={{textAlign:'center', color:'yellow'}}>{el.name}</Text>
    <Text>{el.language}</Text>

    <Flex gap={'20px'} justifyContent='space-around'>
      <p>{el.stargazers_count} <span style={{color:'#89BDD7'}}>stars</span></p>
      <p>{el.forks_count} <span style={{color:'#89BDD7'}}>forks</span></p>
    </Flex>
  </div>
  )
}

export default Cards