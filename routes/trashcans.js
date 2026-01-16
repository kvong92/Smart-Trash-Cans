import express from "express";
import { PrismaClient } from "@prisma/client";
import TrashcanValidator from "../../validators/TrashcanValidator.js";

const router = express.Router();
const prisma = new PrismaClient();

export default router;