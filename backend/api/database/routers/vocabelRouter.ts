import express from "express";
import {
  addSingleVocabel,
  deleteAllVocabels,
  deleteSingleVocabel,
  getAllVocabels,
  getSingleVocabel,
  updateSingleVocabel,
} from "../controllers/vocabelControllers";

export const vocabelRouter = express.Router();

vocabelRouter
  .route("/")
  .get(getAllVocabels)
  .post(addSingleVocabel)
  .delete(deleteAllVocabels);
vocabelRouter
  .route("/:id")
  .get(getSingleVocabel)
  .patch(updateSingleVocabel)
  .delete(deleteSingleVocabel);
