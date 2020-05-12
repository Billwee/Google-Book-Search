const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const http = require("http");
require("dotenv").config();
const server = http.createServer(app);
// const socketIo = require("socket.io");
// const io = socketIo(server);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb://billwee:${process.env.DB_PASSWORD}@ds227525.mlab.com:27525/heroku_d9tm9f5f`,
  { useNewUrlParser: true }
);

// Define API routes here
app.use(routes);

//ATTEMPT AT BONUS SOCKET.IO INTEGRATION
// let interval;
// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });
// const getApiAndEmit = socket => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
