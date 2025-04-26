import React, { useState } from 'react'


const ChatForm = ({ sendMessage }: { sendMessage: 
  (e: React.MouseEvent<HTMLButtonElement>, messageInput: string) => void }) => {

  const [messageInput, setMessageInput] = useState("")
  
  return (
    <form className="chatForm">
      <input type="text" value={messageInput} placeholder="Type your message..." onChange={(e) => setMessageInput(e.target.value)}/>
      <button type="submit" onClick={(e) => {
        sendMessage(e, messageInput)
        setMessageInput("")
      }}>Send</button>
    </form>
  )
}

export default ChatForm
