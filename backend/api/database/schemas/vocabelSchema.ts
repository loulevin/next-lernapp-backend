import mongoose from "mongoose";

const vocabelSchema = new mongoose.Schema(
  {
    japanese: { type: String, required: true },
    reading: { type: String, required: true },
    kanji: { type: String, required: false },
    translate: { type: String, required: true },
    level: [{ type: mongoose.Schema.Types.ObjectId, ref: "Level" }],
  },
  {
    collection: "vocabels",
    timestamps: true,
  }
);

export const Vocabel = mongoose.model("Vocabel", vocabelSchema);
