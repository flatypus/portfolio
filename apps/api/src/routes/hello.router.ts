import { Get, Res, Router } from "@reflet/express";
import { Response } from "express";

@Router("/")
export class HelloRouter {
  @Get()
  async get(@Res() res: Response) {
    res.send("Hello, world!");
  }
}
