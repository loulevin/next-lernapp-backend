import express from "express";
import {
  addSingleLevel,
  deleteAllLevels,
  deleteSingleLevel,
  getAllLevel,
  getSingleLevel,
  updateSingleLevel,
} from "../controllers/levelController";

export const levelRouter = express.Router();

levelRouter
  .route("/")
  .get(getAllLevel)
  .post(addSingleLevel)
  .delete(deleteAllLevels);
levelRouter
  .route("/:id")
  .get(getSingleLevel)
  .patch(updateSingleLevel)
  .delete(deleteSingleLevel);
