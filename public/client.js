const socket = io();
const message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      output = document.getElementById('output'),
      typing = document.getElementById('typing'),
      button = document.getElementById('button');



     // sending typing message
      message.addEventListener('keypress',()=>{
        socket.emit('userTyping',handle.value)
    })
 
    // send message to client
      button.addEventListener('click',() =>{
          socket.emit('userMessage',{
            message: message.value,   // sending name & message to server
            handle: handle.value 
          })
          document.getElementById('message').value="";
      })

       // sending typing message
      message.addEventListener('keypress',()=>{
          socket.emit('userTyping',handle.value)
      })

// listen to events
      socket.on("userMessage",(data)=> {
          typing.innerHTML ="";
          output.innerHTML += '<p> <strong>' + data.handle + ':</strong> '+ data.message + '</p>'    
      })

      socket.on('userTyping',(data)=>{
          typing.innerHTML = '<p> <em>' + data + ' is typing... </em></p>'
      })

      /* Video chat*/

      // get local video & display it with permissions
      function getLVideo(callbacks){


      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      
      var constraints={
          audio:true,
          video:true  // add resolution 
      }
      navigator.getUserMedia(constraints,callbacks.success, callbacks.error)
      
    }
    function recStream(stream,elemid){    // to receive video stream
        var video = document.getElementById(elemid);

        video.srcObject = stream;

        window.peer_stream = stream;       // global variable -used to display our stream on other person browser

    }

    getLVideo({
        success: function(stream){
            window.localstream = stream;
            recStream(stream,'lVideo');
        },
        error: function(err){
            alert("Can not access your camera");
            console.log(err);
        }
    })

    var conn;
    var peer_id;
      //create peerconnection with peer OBJ
      var peer = new Peer();

      // display PEER ID on DOM
      peer.on('open', function() {
          document.getElementById("displayId").innerHTML = '<b>ID:</b>'+ peer.id
      });

      peer.on('connection',function(connection){
          conn =connection;
          peer_id= connection.peer

          document.getElementById('connId').value = peer_id;
      });

      peer.on('error', function(err){
          alert("An error has occured:" + err);
          console.log(err); 
      })

      //onclick with connection button=expose ice info
      document.getElementById('conn_button').addEventListener('click', function(){
          peer_id = document.getElementById('connId').value;

          if(peer_id){
              conn=peer.connect(peer_id)
          }else{
              alert("Enter an ID");
              return false;
          }
      })

      //call on click (offer & answer is exchanged)
      peer.on('call' ,function(call){
          var acceptCall = confirm("Do you want to anser this call?");
          
          if(acceptCall){
              call.answer(window.localstream);

              call.on('stream', function(stream){
                  window.peer_stream = stream;
                  
                  recStream(stream,'rVideo')  // showing rvideo to client   
              });

              call.on('close' ,function(){
                  alert("The call is Ended");    // destroy video on close
              })
          } else{
              // if we dont want to answer
              console.log("call denied")
          }

      });

      //ask to call
      document.getElementById('call_button').addEventListener('click', function(){
          console.log("calling a peer: " +  peer_id);
          console.log(peer);

          var call = peer.call(peer_id,window.localstream);

          call.on('stream' , function(stream){
              window.peer_stream = stream;

              recStream(stream, 'rVideo');
          })
      })

      //accepts the call

      //display remote & local video on client
    