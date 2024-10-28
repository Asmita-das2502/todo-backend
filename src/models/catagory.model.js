import mongoose, { Schema } from "mongoose";

const catagorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true }
);

export const Catagory = mongoose.model("Catagory", catagorySchema);
