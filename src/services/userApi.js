import axios from "axios"


export const fetchUserApi = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response)
}

export const deleteUserApi = async (id) => {
    return await axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response)=>response)
}