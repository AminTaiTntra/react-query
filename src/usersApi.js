import axios from 'axios'

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})

const nasaApi = axios.create({
    baseURL : "https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=B854W5k4SbeG00rGAJjbEyoFBKuxrVn83rqQFL9G"
})


export const getNasa = () => nasaApi.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=B854W5k4SbeG00rGAJjbEyoFBKuxrVn83rqQFL9G"
).then(res => res.data)

export const getUsers = () => api.get('/users').then(res => res.data)


export const getUser = (id) => api.get(`/users/${id}`).then(res => res.data)

export const updateUser = ({id , ...updateUser}) =>
    api.put(`/users/${id}` , updateUser).then((res) => res.data)
