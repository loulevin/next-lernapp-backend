import { Request, Response } from "express";
import { Level } from "../schemas/levelSchema";
import { handleResponse, handleError } from "../../../utils/handler";

export const getSingleLevel = async (req: Request, res: Response) => {
  try {
    const level = await Level.findById(req.params.id);
    handleResponse(res, req, level);
  } catch (e) {
    handleError(res, e);
  }
};

export const getAllSchema = async (req: Request, res: Response) => {
  try {
    const levels = await Level.find();
    handleResponse(res, req, levels);
  } catch (e) {
    handleError(res, e);
  }
};

export const addSingleLevel = async (req: Request, res: Response) => {
  try {
    const level = await Level.create(req.body);
    handleResponse(res, req, level);
  } catch (e) {
    handleError(res, e);
  }
};

export const updateSingleLevel = async (req: Request, res: Response) => {
  try {
    const level = await Level.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    handleResponse(res, req, level);
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteSingleLevel = async (req: Request, res: Response) => {
  try {
    const level = await Level.findByIdAndDelete({ _id: req.params.id });
    handleResponse(res, req, level);
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteAllLevels = async (req: Request, res: Response) => {
  try {
    const level = await Level.deleteMany();
    handleResponse(res, req, level);
  } catch (e) {
    handleError(res, e);
  }
};
