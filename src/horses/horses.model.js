import mongoose from "mongoose";

const horseSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});

export const Horse = mongoose.model("Horse", horseSchema);
