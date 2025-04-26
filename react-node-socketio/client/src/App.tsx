import React, { useEffect, useState } from "react"
import ChatForm from '../components/ChatForm';
import Footer from '../components/Footer';
import { socket } from "./utils";
import Messages from '../components/Messages';
import Header from '../components/Header';



const App = () => {

  const [messages, setMessage] = useState<string[][]>([])

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessage([...messages, ["server", message]])
    })

    setTimeout(() =>{
      const chatList = document.querySelectorAll("li")
      const lastChatItem = chatList[chatList.length - 1]
      lastChatItem.scrollIntoView();
    } , 200)

    return () => {
      socket.off("message")
    }
  }, [messages])

  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>, messageInput: string) => {
    e.preventDefault()
    if (messageInput.trim() !== "") {
      socket.emit("message", messageInput)
      setMessage([...messages, ["client", messageInput]])
    }
  }

  return (
    <main>
      <Header/>
      <Messages messages={messages} />
      <ChatForm sendMessage={ sendMessage } />
      <Footer />
    </main>
  )
}

export default App
