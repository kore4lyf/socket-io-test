import React from 'react'

const UserNameForm = () => {
  return (
    <form className="userNameForm">
      <label htmlFor="username" className="">Username</label>
      <input id="username" type="text" placeholder="Type your username"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserNameForm