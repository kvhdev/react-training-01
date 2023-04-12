import { useState } from 'react'
import user from './user.json'
import UserCard from './UserCard'


function App() {

  return (
    <div>
      <UserCard name={user.name} age={user.age} phone={user.phoneNumbergt} address={user.address}/>
    </div>
  )
}

export default App
