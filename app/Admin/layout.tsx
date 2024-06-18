import React, { ReactNode } from 'react'

interface props {
    children: ReactNode
}

const AdminLayout = ({ children }: props) => {
    return (
        <div className='flex'>

            <aside className='bg-slate-400 p-5 mr-5'>
                ADMIN SIDE BAR

            </aside>
            <div>{children}</div>
        </div>
    )
}

export default AdminLayout