'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { data } from 'autoprefixer'
const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className='flex bg-slate-400'>
      <Link href='/' className='mr-5 p-5 font-medium text-3xl'>Home Page</Link>
      <Link href='/users' className='mr-5 p-5 font-medium text-3xl'>Users</Link>
      {status === 'loading' && <div className='font-medium text-3xl'>LOADING...</div>}
      {status === 'authenticated' &&
        <div>

          <div className='font-medium text-3xl'>{session.user!.name}</div>
          <Link href="/api/auth/signout"> sign out</Link>

        </div>
      }
      {status === 'unauthenticated' && <Link href='/api/auth/signin' className='mr-5 p-5 font-medium text-3xl'>Login</Link>}

    </div>
  )
}

export default NavBar