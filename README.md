## WebRTC and WebSockets Project

### 프로젝트 개요

- WebRTC와 WebSockets의 사용성을 익히고자 프로젝트를 진행하였습니다.

### 프로젝트 기술

1. Node.js
2. Javascript
3. WebRTC
4. WebSockets

### Module

nodemon - 프로젝트를 살펴보고 변경 사항이 있을 시 서버를 재시작해주는 프로그램

Babel - 코드를 일반 Node.js 코드로 컴파일
express
pug - view engine
MVP CSS

server.js : back-end
app.js : front-end

## real-time

webSocket을 이용해 실시간 chat, notification 등의 **real-time**을 만들어낼 수 있습니다.

**HTTP**와 **WebSocket**은 둘 다 **protocol**입니다.

### HTTP, WebSocket

기존 HTTP에서는 유저가 request를 보내면 서버에서 response를 보내는 방식에 stateless(back-end가 유저를 기억하지 못함)입니다.
서버는 오직 request를 받았을 때만 반응합니다. 즉, real-time이 아닙니다. 모든 인터넷 중심이 HTTP로 구성되어 있습니다.

WebSocket은 http와 전혀 다른 프로토콜로 connection(연결)이 일어날 때는 악수처럼 작동합니다. 브라우저가 서버로 webSocket request를 보내면, 서버가 받거나 거절을 합니다.
이 악수가 한 번 성립되면, 연결은 **성립(establish)**됩니다.

연결이 되어있기에 http와 달리 서버는 유저가 누군지 기억할 수 있습니다. 서버는 request를 기다리지않고 유저에게 메세지를 보낼 수 있습니다.

**bi-directional(양방향의)**연결이기 때문입니다. 한 번 연결되면 서로에게 메세지를 자유롭게 보낼 수 있습니다.

WebSocket이 Javascript전용은 아니지만 자바스크립트에서도 사용할 수 있습니다. 브라우저에는 내장된 webSocket API가 있습니다.

webSocket은 protocol이기에 어떤 프로그래밍 언어에 국한되어 있지 않습니다. 또한, 브라우저와 백엔드 사이에서만 동작하는게 아니라 백엔드와 백엔드 사이에서도 동작합니다.
