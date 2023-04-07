const msgerForm = get(".msger-inputarea");
const msgerChat = get(".msger-chat");
const msgerInput = get(".msger-input");

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

// on submit we are sending message to the server



const button = document.getElementById("sbt-btn");
button.addEventListener("click", handleClick);





const roomName = JSON.parse(document.getElementById('room-name').textContent);

const chatSocket = new WebSocket(
  'ws://'
  + window.location.host
  + '/ws/chat/'
  + roomName
  + '/'
);

chatSocket.onmessage = function (e) {
  const data = JSON.parse(e.data);
  const message = data['message'];
  console.log('on message: ', message);
  // on message we are getting message from the server
  chatSocket.onopen = function (event) {
    console.log('Chat socket open');
    // console.log("Message received:", event.data);
    };



    console.log('on message: ', message);
    function appendMessage1(name, side, img, message) {
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

    appendMessage1('Person1', 'right', '', message);

    

    

  };


  
 new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/chat/'
    + roomName
    + '/'
  );
  chatSocket.onopen = function (e) {
    console.log('Chat socket open');
  }
  chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    const message = data['message'];
    console.log('on message: ', message);
    function appendMessage(name, side, img, message) {
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
    appendMessage('Person2', 'left', '', message);
    console.log('right side message');
  };
  chatSocket.onclose = function (e) {
    console.error('Chat socket closed unexpectedly');
  }













  function handleClick() {
    const msgText = msgerInput.value;
    if (!msgText) return;
    chatSocket.send(JSON.stringify({
      'message': msgText
    }));
    msgerInput.value = "";
  }

  chatSocket.onclose = function (e) {
    console.error('Chat socket closed unexpectedly');
  }

  

  



