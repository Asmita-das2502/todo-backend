import mongoos, { Schema } from "mongoose";

const todotaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
    },
    createdBy: {
      type: mongoos.Schema.Types.ObjectId,
      ref: "User",
    },
    complete: {
      type: Boolean,
      default: false,
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
  { timestamps: true }
);

export const Todotask = mongoos.model("Todotask", todotaskSchema);
