import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState([])
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      setState(response.data)
    })
  }

  const handleUserDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  const handleUserCreate = (e) => {
    e.preventDefault()
    let body = {
      name,
      username,
      email
    }
    axios.post('https://jsonplaceholder.typicode.com/users', body)
    .then(response=>{
      console.log(response)
    })
  } 

  const handleUserEdit = (id) => {
    const newName = prompt("Name: ")
    const newUsername = prompt("Username: ")
    const newEmail = prompt("email: ")
    setName(newName)
    setUsername(newUsername)
    setEmail(newEmail)
    let body = {
      name,
      username,
      email
    }
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, body)
    .then(response=>{
      console.log(response)
    })
  }

  useEffect(()=>{
    getUsers()
  }, [])
  

  return (
    <div className="App">
        <form className='userFormCreate' onSubmit={handleUserCreate}>
          <h2>Create new user</h2>
          <input 
            onChange={(e) => setName(e.target.value)} 
            type='text' 
            placeholder='name'
            value={name}
          />
          <input 
            onChange={(e) => setUsername(e.target.value)} 
            type='text' 
            placeholder='username'
            value={username}
          />
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            type='email' 
            placeholder='email'
            value={email}
          />
          <button type='submit'>create</button>
        </form>
        {state.map(el =>  (
            <div key={el.id} className='usersListItem'>
              <div className='id'>id: {el.id}</div>
              <div className='name'>{el.name}</div>
              <div className='username'>Username: {el.username}</div>
              <div className='email'>email: {el.email}</div>
              <button 
                onClick={()=>handleUserDelete(el.id)}
                className='userDeleteButton'
              >
                Delete
              </button>
              <button
                onClick={()=>handleUserEdit(el.id)}
                className='userEditButton'
              >
                Edit
              </button>
            </div>
          )
        )}
    </div>
  );
}

export default App;
