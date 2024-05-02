import { HelloRouter } from "./routes/hello.router";
import { register } from "@reflet/express";
import express from "express";
import expressWs from "express-ws";
import { Tagiron } from "./routes/tagiron.socket";

const { app } = expressWs(express());

register(app, [HelloRouter]);

app.ws("/tagiron", Tagiron);
app.listen(4000);

console.log(`Express with reflet is running at port 4000!`);
