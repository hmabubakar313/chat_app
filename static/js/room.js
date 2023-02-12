const msgerForm = get(".msger-inputarea");
const msgerChat = get(".msger-chat");
// Utils
function get(selector, root = document) {
    return root.querySelector(selector);
  }

// formdata fnction
function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
  
    return `${h.slice(-2)}:${m.slice(-2)}`;
  }
msgerForm.addEventListener("submit", event => {
    event.preventDefault();
  
    const msgText = msgerInput.value;
    if (!msgText) return;
    
   
    msgerInput.value = "";
    
  });

  


  


const roomName = JSON.parse(document.getElementById('room-name').textContent);

        const chatSocket = new WebSocket(
            'ws://'
            + window.location.host
            + '/ws/chat/'
            + roomName
            + '/'
        );

        chatSocket.onmessage = function(e) {
            const data = JSON.parse(e.data);
            const message = data['message'];
            // on message we are getting message from the server
            console.log('on message: ', message);   
        };
        
        
        

        document.querySelector('#user-input').onkeyup = function(e) {
            if (e.keyCode === 13) {  // enter, return
                document.querySelector('#sbt-btn').click();
                appendMessage(message);
            }
            
            
        };
        
         document.querySelector('#sbt-btn').onclick = function(e) {
            const messageInputDom = document.querySelector('#user-input');
            const message = messageInputDom.value; 
            chatSocket.send(JSON.stringify({
                'message': message
            }));
            messageInputDom.value = '';

            // console.log('on click: ', message);
            // append this message to the chat window 
            function appendMessage(name, side, img,message ) {
              const msgHTML = `
              <div class="msg ${side}-msg">
                <div class="msg-img" style="background-image: url(${img})"></div>
          
                <div class="msg-bubble">
                  <div class="msg-info">
                    <div class="msg-info-name">${name}</div>
                    <div class="msg-info-time">${formatDate(new Date())}</div>
                  </div>
          
                  <div class="msg-text">${message}</div>
                </div>
              </div>
            `;
              msgerChat.insertAdjacentHTML("beforeend", msgHTML);
              msgerChat.scrollTop += 500;
            }

            

            appendMessage('Person1','right','',message);
            
        };
 