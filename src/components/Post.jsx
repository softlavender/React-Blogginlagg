import { useState } from "react"
import UserInformation from "./UserInformation"

export const Post = ({title, body, userId, id}) => {
// export const Post = ({title, body}) => {
  const [user, setUser] = useState(null)

  const getUser = async _ => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
    const json = await response.json()
    setUser(json)
  }

  return (
    <div className="post">
      <p style={{color: 'yellow'}}>Title: {title}</p>
      <p>Body: {body}</p>
      <p>User id: {userId}</p>
      <p>id: {id}</p>
      {user && <UserInformation {...user}/>}
      <button onClick={getUser}>get user</button>
    </div>
  )
}
