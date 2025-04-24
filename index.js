// 1. Packages
import express from "express"
import http from "http"

import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"
import { Server } from "socket.io"

// 2. Instances

const app = express()
const server = http.createServer(app)
const io = new Server(server)


// 3. Serving HTML File
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname, "index.html")
app.get("/", (req, res) => res.sendFile(join(__dirname, "index.html")))


// 4. Define a connection event handler
io.on("connection", (client) => {
  console.log("User connected to Server ✔")

  client.emit("message", "Welcome dude!")
  
  client.on("disconnect", () => {
    console.log("User disconnected from Server ✖")
  })

  client.on("message", (message) => {
    console.log("Message: ", message)
    client.broadcast.emit("message", message)
  })
})



// 5. Start the server
const PORT = 3000
server.listen(PORT, () => console.log(`Sever running on port: ${PORT}`))



