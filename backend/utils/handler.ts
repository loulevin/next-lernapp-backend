import { Request, Response } from "express";

export const handleResponse = (res: Response, req: Request, model: any) => {
  if (model) {
    return res.status(200).json(model);
  } else {
    return res
      .status(404)
      .json({ message: `${req.params.id} could not be found` });
  }
};

export const handleError = (res: Response, e: any) => {
    return res.status(500).json(e.message)
}
