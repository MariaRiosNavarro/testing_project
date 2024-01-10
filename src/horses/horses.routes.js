import express from "express";
import {
  getHorses,
  postHorse,
  deleteHorse,
  putHorse,
} from "./horses.controller.js";

export const router = new express.Router();

router.get("/", getHorses);
router.post("/", postHorse);
router.put("/", putHorse);
router.delete("/", deleteHorse);
