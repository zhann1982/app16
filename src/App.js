import { fetchUserAction } from './actions/fetchUserAction';
import { deleteUserAction } from './actions/deleteUserAction';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const { userList } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  const getUsers = () => dispatch(fetchUserAction())
  
  const deleteUser = (id) => {
    dispatch(deleteUserAction(id))
    getUsers()
  }

  useEffect(()=>getUsers(), [])
  
  return (
    <div className="App">
        {/* <form className='userFormCreate' onSubmit={handleUserCreate}>
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
        </form> */}
        {userList.map((el) =>  (
            <div key={el.id} className='usersListItem'>
              <div className='id'>id: {el.id}</div>
              <div className='name'>{el.name}</div>
              <div className='username'>Username: {el.username}</div>
              <div className='email'>email: {el.email}</div>
              <button 
              onClick={()=>deleteUser(el.id)}
                className='userDeleteButton'
              >
                Delete
              </button>
              <button
                // onClick={()=>handleUserEdit(el.id)}
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
