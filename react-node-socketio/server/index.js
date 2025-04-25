import express from "express"
import { createServer } from "node:http"
import { Server } from "socket.io"
import cors from "cors"


// Configurations
const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
})


// middleware
app.use(cors())

// socket.io stuff
io.on("connection", (client) => {
  console.log("New Client Connected")

  client.on("message", (message) => {
    console.log("Message received: ", message)
    client.broadcast.emit("message", message)
  })

  client.on("disconnect", () => {
    console.log("Client disconnected")
  })
})

// Run the server
const PORT  = 3000
server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))