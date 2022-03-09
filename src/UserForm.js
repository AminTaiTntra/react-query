import React , {useState} from 'react'
import { useMutation , useQueryClient } from 'react-query'
import * as API from './usersApi'

function UserForm({ user , setIsEditing }) {
    const [fields , setFields] = useState({...user})
    const queryClient = useQueryClient()

    // used to update or data to the database
   
    const {isLoading , mutate , error} = useMutation(API.updateUser,{
        onMutate: (updatedUser) => {
            queryClient.setQueryData(['user',user.id], updatedUser
            )
            setIsEditing(false)
        }
    } , {
        
        onSuccess : () => {
            console.log("fields",fields);
            // trigger the old data to be updated
            //Unlike the useQuery hook, mutations are used to perform CREATE, UPDATE, or DELETE operations as the server-side operations inside our components.
            queryClient.invalidateQueries(['user' , user.id])
            // setIsEditing(false)      
        }
    }
    )
    const handleChange = (event) => {
        const { name , email , website ,value } = event.target;
        
        setFields({ ...fields , [name] : value , [email] : value , [website]: value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Before");
        console.log(fields);

        mutate(fields)
        console.log("After");
        console.log(fields);
    }
    if(isLoading) 
        return "Saving Your Changes..."
    
    if(error)
        return "Error While Updating.."
    return (
        <div style={{padding:20}}>
            <form onSubmit = {handleSubmit}>
                <label>
                    Name :
                    <input
                        name="name"
                        type="text"
                        value={fields.name}
                        onChange={handleChange}
                        style={{ width : "100%" , margin : 20 }}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        type="email"
                        value={fields.email}
                        onChange={handleChange} 
                    />
                </label>
                <label>
                    Web : 
                    <input 
                        name="website"
                        type="text"
                        value={fields.website}
                        onChange={handleChange}
                    />
                </label>
                    <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default UserForm
