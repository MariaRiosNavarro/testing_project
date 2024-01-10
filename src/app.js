import express from "express";
import mongoose from "mongoose";
import { router as horseRouter } from "./horses/horses.routes.js";

await mongoose.connect("mongodb://horsedb:27017/superstall");
// (Wir haben alles in den docker compose (netzwerk) definiert, die test mussen auch da machen und nicht in npm test in computer)
export const app = express();
app.use(express.json());
app.use("/api/horses", horseRouter);
