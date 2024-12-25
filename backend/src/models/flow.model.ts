import mongoose from "mongoose";

const flowSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    method: {
      type: String,
      enum: ["GET", "POST", "DELETE"],
    },
    headers: {
      type: Map,
      of: String,
    },
    body: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

export const flow = mongoose.model("flow", flowSchema);
