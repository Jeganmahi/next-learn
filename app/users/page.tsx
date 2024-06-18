import React from 'react'
import UsersTable from './newusers/UsersTable'

interface props {
    searchParams: { sortOrder: string }
}
const UsersPage = async ({ searchParams: { sortOrder } }: props) => {
    console.log(sortOrder)
    return (
        <div>
            <UsersTable sortOrder={sortOrder} />

        </div>
    )
}

export default UsersPage