import express from "express";
import resourceGetRoute from "./resource/resourceGet.route.js";

const router = express.Router();
router.use(express.json({ strict: false }));

// Single example route
router.get("/", resourceGetRoute);

export default router;