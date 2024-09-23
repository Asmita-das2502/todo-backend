//require("dotenv").config({path: "./env"})

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(
    app.listen(proccess.env.PORT || 8000, () => {
      console.log(`server is running at port :${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log("MONGODB connection failed !!!", err);
  });

/*

first approch for database conection

import express from "express";
const app = express()(
  //for conecting the database

  async () => {
    try {
      mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      app.on("error", () => {
        console.log("error", error);
        throw error;
      });
      app.listen(process.env.PORT, () => {
        console.log(`app is listing on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("somethig went wrong at port ");
      throw error;
    }
  }
)();*/
