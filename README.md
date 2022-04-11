# WebRTC and WebSockets Project

### Start

```javascript
npm run dev
```

## 프로젝트 개요

- WebRTC와 WebSockets의 **real-time** 사용성을 익히고자 프로젝트를 진행하였습니다.

### 프로젝트 기술

1. Node.js
2. Javascript
3. WebRTC
4. WebSockets
5. SocketIO

### Module

- nodemon - 프로젝트를 살펴보고 변경 사항이 있을 시 서버를 재시작해주는 프로그램
- Babel - 코드를 일반 Node.js 코드로 컴파일
- express - Framework
- pug - view engine
- MVP CSS - Temporary CSS
- ws - Node.js WebSocket library

### File

server.js : back-end
app.js : front-end

### real-time

webSocket을 이용해 실시간 chat, notification 등의 **real-time**을 만들어낼 수 있습니다.

**HTTP**와 **WebSocket**은 둘 다 **protocol**입니다.

### HTTP, WebSocket

기존 HTTP에서는 유저가 request를 보내면 서버에서 response를 보내는 방식에 **stateless(back-end가 유저를 기억하지 못함)** 입니다.
서버는 오직 request를 받았을 때만 반응합니다. 즉, real-time이 아닙니다. 모든 인터넷 중심이 HTTP로 구성되어 있습니다.

WebSocket은 http와 전혀 다른 프로토콜로 connection(연결)이 일어날 때는 악수처럼 작동합니다. 브라우저가 서버로 webSocket request를 보내면, 서버가 받거나 거절을 합니다.
이 악수가 한 번 성립되면, 연결은 **성립(establish)** 됩니다.

연결이 되어있기에 http와 달리 서버는 유저가 누군지 기억할 수 있습니다. 서버는 request를 기다리지않고 유저에게 메세지를 보낼 수 있습니다.

**bi-directional(양방향의)** 연결이기 때문입니다. 한 번 연결되면 서로에게 메세지를 자유롭게 보낼 수 있습니다.

**WebSocket**은 자바스크립트에서도 사용할 수 있지만 Javascript전용은 아닙니다. 브라우저에는 내장된 **webSocket API** 가 있습니다.

webSocket은 protocol이기에 어떤 프로그래밍 언어에 국한되어 있지 않습니다. 또한, 브라우저와 백엔드 사이에서만 동작하는게 아니라 백엔드와 백엔드 사이에서도 동작합니다.

### Socket IO vs WebSockets

Socket IO는 프론트와 백엔드 간 실시간 통신을 가능하게 해주는 프레임워크 또는 라이브러리로 강력한 Chat Framework로 실시간, 양방향, event 기반의 통신을 가능하게 해줍니다.

Socket IO는 websocket을 실행하는것이 아니라 프레임워크로 websocket보다 훨씬 탄력성이 뛰어납니다.

websocket은 Socket IO가 실시간, 양방향, event기반 통신을 제공하는 방법 중 하나입니다.

만약 브라우저나 모바일에서 websocket을 지원하지않아도 socket IO는 다른 방법을 이용해서 계속 작동을 합니다.

즉, socket IO는 **websocket**의 부가기능이 아닙니다. 오히려 socket IO가 **websocket**을 방법 중 하나로 사용합니다.

**firewall**, **proxy**가 있어도 socket IO는 계속 작동합니다.

```
localhost:3000/socket.io/socket.io.js
```
