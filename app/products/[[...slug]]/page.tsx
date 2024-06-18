import React from 'react'

interface props {
    params:{slug: string[]}
}

const Products = ( {params: {slug}}:props) => {
  
  return (
   <div>{slug}</div> 
  )
}

export default Products