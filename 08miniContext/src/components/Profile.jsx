import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
  const {user} = useContext(UserContext);
  // return (
  //   <div>Profile</div>
  // )

  if(!user){
    return <h2>please login</h2>
  }
  return <div>welcome {user.username}</div>
}
