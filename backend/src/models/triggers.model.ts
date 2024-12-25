import mongoose from "mongoose";

const triggerSchema = new mongoose.Schema({
  webhookUrl: {
    type: String,
    required: true,
  },
  body: {
    type: JSON,
  },
});

export const trigger = mongoose.model("trigger", triggerSchema);
