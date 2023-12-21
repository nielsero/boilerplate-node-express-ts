import { Request, Response } from "express";

export class GetHealthController {
  handle(req: Request, res: Response) {
    res.json({ message: "Server is up and running!" });
  }
}
