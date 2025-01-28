import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  }

  return (
    <div className='bg-black p-5 m-5 rounded-3xl'>
      <h2>Login</h2>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' className='' />
      {" "}
      <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
