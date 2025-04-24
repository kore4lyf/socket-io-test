import React, { useEffect, useState } from "react"
import io from "socket.io-client"

const socket = io("http://localhost:3000")


const App = () => {

  const [messages, setMessage] = useState<string[]>([])
  const [messageInput, setMessageInput] = useState("")

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessage([...messages, message])
    })

    return () => {
      socket.off("message")
    }
  }, [messages])

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      socket.emit("message", messageInput)
      setMessageInput("")
    }
  }

  return (
    <main>
      <div>
        <h1>CHATAPP</h1>
        <input type="text" value={messageInput} placeholder="Type your message..." onChange={(e) => setMessageInput(e.target.value)}/>
        <button onClick={sendMessage}>Send</button>
      </div>

      <section>
        {messages.map((message, index) => (
          <div key={index}> {message} </div>
        ) )}
      </section>
    </main>
  )
}

export default App
