import express from "express";
import { getHorses, postHorse, deleteHorse } from "./horses.controller.js";

export const router = new express.Router();

router.get("/", getHorses);
router.post("/", postHorse);
router.delete("/", deleteHorse);
