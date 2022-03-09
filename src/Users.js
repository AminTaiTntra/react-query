import React from 'react'
import { useQuery } from 'react-query'
import * as userApi from './usersApi'

const   Users = ({ setUserId }) => {
    const { data , isLoading , isError , error} = useQuery('users' , userApi.getUsers , {
        retry : false
    })
    console.log(data);

    if(isLoading)
        return "Loading Users...."
    if(isError)
        return "Something Went Wrong"
    return (
        <div>
            <ul>
                {
                    data?.map(user => <li key={user.id}>
                        {user.name}
                        <button onClick={() => setUserId(user.id)}>View</button>
                     </li>)
                }
            </ul>
        </div>
    )
}

export default Users
