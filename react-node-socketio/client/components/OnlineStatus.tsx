import React, { useRef } from 'react'
import { socket } from "../utils/utils"

const OnlineStatus = () => {
  const onlineBtn = useRef(null)
  const offlineBtn = useRef(null)

  const goOnline = () => {
    socket.connect()
    if(onlineBtn.current && offlineBtn.current) {
      (onlineBtn.current  as HTMLButtonElement).classList.remove("hidden");
      (offlineBtn.current  as HTMLButtonElement).classList.add("hidden")
    }
    }
  
  const goOffline = () => {
    socket.disconnect()
    if(offlineBtn.current && onlineBtn.current) {
      (offlineBtn.current as HTMLButtonElement).classList.remove("hidden");
      (onlineBtn.current  as HTMLButtonElement).classList.add("hidden")
    }
  }

  return (
    <div>
      <button ref={offlineBtn} className="hidden" onClick={goOnline}>Offline</button>
      <button ref={onlineBtn} className="" onClick={goOffline}>Online</button>
    </div>
  )
}

export default OnlineStatus