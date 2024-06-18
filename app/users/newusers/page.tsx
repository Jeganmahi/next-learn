'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
const NewusersPage = () => {
  const route =  useRouter();
  return (
    <div>
      <button onClick = {()=>{
        route.push('/users')
      }}className='btn btn-primary'>handle back</button> </div>
  )
}

export default NewusersPage