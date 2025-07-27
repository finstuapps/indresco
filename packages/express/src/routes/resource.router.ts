import { Router, json } from "express";
import resourceGetRoute from "./resource/resourceGet.route.js";

const router = Router();
router.use(json({ strict: false }));

// Single example route
router.get("/", resourceGetRoute);

export default router;
