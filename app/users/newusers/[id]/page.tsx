import React from 'react'
import { notFound } from 'next/navigation';

interface props {
    params: {id: number}
}

const UserDetailPage = ({params:{id}}:props) => {
  if(id>10) notFound();
  return (
    <div>{id}</div>
  ) 
}

export default UserDetailPage