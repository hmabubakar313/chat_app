const roomName = JSON.parse(document.getElementById('room-name').textContent);
console.log('Reloadig File: room.js');
        const chatSocket = new WebSocket(
            'ws://'
            + window.location.host
            + '/ws/chat/'
            + roomName
            + '/'
        );

        /* chatSocket.onmessage = function(e) {
            const data = JSON.parse(e.data);
                     
        };
 */
        chatSocket.onclose = function(e) {
            console.error('Chat socket closed unexpectedly');
        };
        

        document.querySelector('#msger-input').onkeyup = function(e) {
            if (e.keyCode === 13) {  // enter, return
                document.querySelector('#msger-send-btn').click();
            }
        };

        document.querySelector('#msger-send-btn').onclick = function(e) {
            const messageInputDom = document.querySelector('#msger-input');
            const message = messageInputDom.value;
            chatSocket.send(JSON.stringify({
                'message': message
            }));
            messageInputDom.value = '';
        };

