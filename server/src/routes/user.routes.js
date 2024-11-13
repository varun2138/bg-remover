import { Router } from "express";
import { clerkWebhooks } from "../controllers/user.controller.js";

const router = Router();

router.post("/webhooks", clerkWebhooks);

export default router;
