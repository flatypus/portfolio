import { Request } from "express";

const game = {
  players: [],
};

export function Tagiron(ws: any, req: Request) {
  ws.on("message", function (msg: string) {
    console.log(msg, ws.id);
  });

  //   on disconnect
  ws.on("close", function () {
    console.log("disconnected");
  });
}
