import express from "express";
import { Vocabel } from "../schemas/vocabelSchema";
import { handleResponse, handleError } from "../../../utils/handler";

export const getSingleVocabel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const vocabel = await Vocabel.findById(req.params.id);
    handleResponse(res, req, vocabel);
  } catch (e) {
    handleError(res, e);
  }
};

export const getAllVocabels = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const vocabels = await Vocabel.find();
    handleResponse(res, req, vocabels);
  } catch (e) {
    handleError(res, e);
  }
};

export const addSingleVocabel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const vocabel = await Vocabel.create(req.body);
    handleResponse(res, req, vocabel);
  } catch (e) {
    handleError(res, e);
  }
};

export const updateSingleVocabel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const vocabel = await Vocabel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    handleResponse(res, req, vocabel);
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteSingleVocabel = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const vocabel = await Vocabel.findByIdAndDelete({ _id: req.params.id });
    handleResponse(res, req, vocabel);
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteAllVocabels = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const vocabel = await Vocabel.deleteMany();
    handleResponse(res, req, vocabel);
  } catch (e) {
    handleError(res, e);
  }
};
