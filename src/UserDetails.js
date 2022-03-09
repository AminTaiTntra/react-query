import React from 'react'
import { useQuery } from 'react-query'
import { useState } from 'react/cjs/react.development'
import UserForm from './UserForm'
import * as API from './usersApi'

function UserDetails({userId}) {
    const [ isEditing , setIsEditing ] = useState(false)

    const { data : user , isLoading , isFetching } = useQuery(["user",userId] , () =>
     API.getUser(userId) , {
        enabled : Boolean(userId)
       }
    )

    if(!userId) 
        return "Select a user.."
    
    if(isLoading) 
        return "Loading User Details.."
    
    return (
        <div style={{display:"flex" , justifyContent : "center"}}>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit"}
            </button>
            {user.name} <br/>
            {user.email} <br/>
            {user.website}

            <UserForm user={user} setIsEditing={setIsEditing}/>
        </div>
    )
}
                         
export default UserDetails
