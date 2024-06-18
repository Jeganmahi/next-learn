import React from 'react'

interface props {
    params : {id : number; photoId: number}
}

const Photopage = ({params : {id,photoId}}:props) => {
  return (
    <div> user id : {id} photo id : {photoId}</div>
  )
}

export default Photopage