import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { NavLink, Outlet } from 'react-router-dom'

function Users() {

    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'

    const userList = [
        {
            user: "User1",
            id: 1
        },
        {
            user: "User2",
            id: 2
        },
        {
            user: "User3",
            id: 3
        },
    ]

    const render = userList.map((user) => {
        return <NavLink to={`/users/${user.id}`}>{user.user}</NavLink>
    })
  return (
    <>
        <nav>
            {render}
        </nav>
        <Outlet />
        <div>
            <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>
        </div>
        {
            showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
        }
    </>
  )
}

export default Users