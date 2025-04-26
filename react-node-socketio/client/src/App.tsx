import React, { useEffect, useState } from "react"
import ChatForm from '../components/ChatForm';
import Footer from '../components/Footer';
import { socket } from "../utils/utils";
import Messages from '../components/Messages';
import Header from '../components/Header';
import { Imessage } from '../utils/types';
import { state } from '../utils/context';



const App = () => {

  const [messages, setMessage] = useState<Imessage[]>([])
  const [username, setUsername] = useState("")

  useEffect(() => {
    socket.on("message", (message: Imessage) => {
      setMessage([...messages, message])
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
      const message = {
        username: username,
        message: messageInput
      }

      socket.emit("message", message)
      setMessage([...messages, message])
    }
  }

  return (
    <state.Provider value={{
      username: username,
      messages: messages
    }}>
      <main>
        <Header/>
        <Messages messages={messages} />
        <ChatForm sendMessage={ sendMessage } />
        <Footer />
      </main>
    </state.Provider>
  )
}

export default App
