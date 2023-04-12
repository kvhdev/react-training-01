import { useState } from 'react'
import user from './user.json'
import UserCard from './UserCard'


function App() {
  //const userInfo = JSON.parse(user);
  //console.log(user);
  return (
    <div>
      <UserCard name={user.name} age={user.age} phone={user.phoneNumber} address={user.address}/>
      
    </div>
  )
}

export default App
