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
            var bool = true;
            
            if (bool == true) {
                document.querySelector('#text-message').innerHTML += data['message'];
            }
            bool = false;

            if (bool == false) {
                document.querySelector('#text-message2').innerHTML += data['message'];

            } 
            bool = true;
        };

        chatSocket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
        };
       
        document.querySelector('#chat-message-input').focus();
        document.querySelector('#chat-message-input').onkeyup = function(e) {
            if (e.keyCode === 13) {  // enter, return
                document.querySelector('#chat-message-submit').click();
            }
        };

        document.querySelector('#chat-message-submit').onclick = function(e) {
            const messageInputDom = document.querySelector('#chat-message-input');
            const message = messageInputDom.value;
            chatSocket.send(JSON.stringify({
                'message': message
            }));
            messageInputDom.value = '';
        };

