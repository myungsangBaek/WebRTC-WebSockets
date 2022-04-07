import http from "http";
import WebSocket from "ws";
import express from "express";
import { parse } from "path";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");

//http & ws 동시 구동 http서버 위에 webSocket서버 구현, 동일한 포트에서 처리 가능
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const sockets = [];

//연결된 브라우저
wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Anon";
  console.log("Connected to Browser");
  socket.on("close", () => console.log("Disconnected from the Browser"));
  socket.on("message", (msg) => {
    const message = JSON.parse(msg);
    switch (message.type) {
      case "new_message":
        sockets.forEach((aSocket) =>
          aSocket.send(
            `${socket.nickname} : ${message.payload.toString("utf-8")}`
          )
        );
      case "nickname":
        socket["nickname"] = message.payload.toString("utf-8");
    }
  });
});

server.listen(3000, handleListen);
