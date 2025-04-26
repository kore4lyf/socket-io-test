import React from 'react'

const Message = ( { message }: { message: string[] } ) => {
  return (
    <li className={message[0] == "server" ? "server" : "client"}> 
      <p>{message[1]}</p> 
    </li>
  )
}

export default Message