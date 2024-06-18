import React from 'react'
import Link from 'next/link'
import { sort } from 'fast-sort';
interface Users {
    id: number,
    name: string,
    email: String

}
interface props {
    sortOrder : string
}

const UsersTable = async ({sortOrder}:props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: Users[] = await res.json();
    const sortedUser = sort(users).asc(sortOrder === "email"? user => user.email: user=>user.name)

    return (
        <div className='p-5'>
            <Link  href='/users/newusers' className='btn'> create new user</Link>
            {
                <table className='table table-bordered'>
                    <thead>
                        <th >
                            <Link href='/users?sortOrder=name'>USER NAME</Link></th>
                        <th>
                            <Link href='/users?sortOrder=email'>Email</Link>
                        </th>

                    </thead>
                    <tbody>
                        {sortedUser.map(user => <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>)

                        }
                    </tbody>
                </table>

            }

        </div>
    )
}

export default UsersTable