import React, { useContext } from 'react'
import OnlineStatus from './OnlineStatus';
import { state } from "../utils/context";

const Header = () => {
  const username = useContext(state)?.username
  console.log("username: ", username)

  return (
    <header>
      <h1>CHAT APP</h1>
      <div>
        <span>{username}</span>
        <OnlineStatus/>
      </div>
    </header>
  )
}

export default Header