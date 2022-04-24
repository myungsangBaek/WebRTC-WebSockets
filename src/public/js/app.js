const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("#room");

room.hidden = true;

let roomName = "";

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  //emit 모든 이벤트와 Js Object 전송이 가능하다.callback 사용 가능
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);

//webSocket
// const messageList = document.querySelector("ul");
// const nickForm = document.querySelector("#nick");
// const messageForm = document.querySelector("#message");

// //서버로의 연결
// const socket = new WebSocket(`ws://${window.location.host}`);

// function makeMessage(type, payload) {
//   const msg = { type, payload };
//   return JSON.stringify(msg);
// }

// function handleOpen() {
//   console.log("Connected to Server");
// }
// socket.addEventListener("open", handleOpen);

// socket.addEventListener("message", (message) => {});

// socket.addEventListener("close", () => {
//   console.log("Disconnected from Server");
// });

// // setTimeout(() => {
// //   socket.send("hello from the browser!");
// // }, 10000);

// function handleSubmit(event) {
//   event.preventDefault();
//   const input = messageForm.querySelector("input");
//   socket.send(makeMessage("new_message", input.value));
//   const li = document.createElement("li");
//   li.innerText = `You: ${input.value}`;
//   messageList.append(li);
//   input.value = "";
// }

// function handleNickSubmit(event) {
//   event.preventDefault();
//   const input = nickForm.querySelector("input");
//   socket.send(makeMessage("nickname", input.value));
//   input.value = "";
// }

// messageForm.addEventListener("submit", handleSubmit);
// nickForm.addEventListener("submit", handleNickSubmit);
