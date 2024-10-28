import mongoose, { Schema } from "mongoose";
import { Catagory } from "./catagory.model";

const todoCatagorySchema = new mongoose.Schema(
  {
    todoTaskId: {
      type: mongoose.Schema.Typesl.ObjectId,
      ref: "Todotask",
      require: true,
    },
    catagoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamp: true }
);

export const TodoCatagory = mongoose.model("TodoCatagory", todoCatagorySchema);
