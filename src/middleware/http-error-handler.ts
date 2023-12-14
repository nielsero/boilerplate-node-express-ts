import { HttpError } from "@/shared/errors";
import { NextFunction, Request, Response } from "express";

export const httpErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpError)
    return res.status(err.code).json({
      error: {
        code: err.code,
        message: err.message,
      },
    });

  console.log(err); // WTFError

  return res.status(500).json({
    error: {
      code: 500,
      message: "Something went wrong",
    },
  });
};
