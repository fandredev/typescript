import React, { useState, useEffect } from 'react'
import api from './services/api'
import User from './components/User'
interface I_User {
  name: string
  email: string
}
function App() {
  const [users, setUsers] = useState<I_User[]>([])
  useEffect(() => {
    api.get<I_User[]>('/users').then(response => {
      console.log(response.data)
      setUsers(response.data)
    })
  })
  return (
    <div className="App">
      {users.map(user => <User key={user.email} user={user} />)}
    </div>
  );
}

export default App;
