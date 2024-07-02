import mongoose from "mongoose";

export const levelSchema = new mongoose.Schema(
  {
    level: { type: String, required: true },
  },
  {
    collection: "level",
    timestamps: true,
  }
);

export const Level = mongoose.model("Level", levelSchema)
