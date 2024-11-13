import { Router } from "express";
import { clerkWebhooks } from "../controllers/user.controller.js";

const router = Router();

router.route("/webhooks").post(clerkWebhooks);

export default router;
