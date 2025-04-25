import React, { useEffect, useState } from "react"
import io from "socket.io-client"

const socket = io("http://localhost:3000")


const App = () => {

  const [messages, setMessage] = useState<string[][]>([])
  const [messageInput, setMessageInput] = useState("")

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessage([...messages, ["server", message]])
    })

    return () => {
      socket.off("message")
    }
  }, [messages])

  const sendMessage = (e: SubmitEvent) => {
    e.preventDefault()
    if (messageInput.trim() !== "") {
      socket.emit("message", messageInput)
      setMessage([...messages, ["client", messageInput]])
      setMessageInput("")

    }
  }

  return (
    <main>
      <header>
        <h1>CHAT APP</h1>
      </header>

      <ul className="messages">
        {messages.map((message, index) => (
          <li className={message[0] == "server" ? "server" : "client"} key={index}> 
            <p>{message[1]}</p> 
          </li>
        ) )}
      </ul>

      <form>
        <input type="text" value={messageInput} placeholder="Type your message..." onChange={(e) => setMessageInput(e.target.value)}/>
        <button type="submit" onClick={sendMessage}>Send</button>
      </form>

      <footer>
        <p>Made with <span className="love">❤</span> by <a href="https://www.github.com/kore4lyf">KoRe</a></p>
      </footer>
    </main>
  )
}

export default App
