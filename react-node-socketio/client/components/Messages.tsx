import React, { useContext } from 'react'
import Message from './Message';
import { state } from "../utils/context";

const Messages = () => {
  const messages = useContext(state).messages

  return (
    <ul className="messages">
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ) )}
      </ul>
  )
}

export default Messages