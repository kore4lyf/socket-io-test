import React from 'react'
import Message from './Message';

const Messages = ({ messages }: { messages: string[][]}) => {
  return (
    <ul className="messages">
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ) )}
      </ul>
  )
}

export default Messages