const socket = io();
const message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      output = document.getElementById('output'),
      typing = document.getElementById('typing'),
      button = document.getElementById('button');

      // send message to client
      button.addEventListener('click',() =>{
          socket.emit('userMessage',{
            message: message.value,   // sending name & message to server
            handle: handle.value 
          })
      })

       // sending typing message
      message.addEventListener('keypress',()=>{
          socket.emit('userTyping',handle.value)
      })

// listen to events
      socket.on("userMessage",(data)=> {
          output.innerHTML += '<p> <strong>' + data.handle + ':</strong> '+ data.message + '</p>'    
      })

      socket.on('userTyping',(data)=>{
          typing.innerHTML = '<p> <em>' + data + 'is typing... </em></p>'
      })