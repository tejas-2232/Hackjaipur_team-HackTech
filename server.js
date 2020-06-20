// io needs to use HTTP, express will still be the middleware for routes
const express = require('express')
const app = express(); //creating express app
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port= process.env.PORT || 3004;
 http.listen(port,() => {
     console.log("listening on port"+port)
 });

 app.get('/',(req,res) =>{
     res.sendFile(__dirname+ "/index.html")  //connecting to index 
 })

 app.use(express.static('public'))  //public is name of folder where static iles r present

 io.on('connection',function(socket){
    console.log("client is connected"+socket.id)

    socket.on('userMessage',(data) => {
        io.sockets.emit("userMessage",data)
    })
    socket.on('userTyping',(data)=>{
        socket.broadcast.emit('userTyping',data)
      
    });

 });