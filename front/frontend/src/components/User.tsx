import React from 'react'
interface I_User {
    name: string
    email?: string
}
interface Props {
    user: I_User
}
const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome</strong> {user.name}<br></br>
            <strong>Email</strong> {user.email || 'Sem email'}<br></br>
        </div>
    )
}
export default User