import express from "express"

import {
  getPlats,
  getPlat,
  createPlat,
  updatePlat,
  deletePlat,
} from "../controllers/RestaurantPosts.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.get("/", auth, getPlats)
router.post("/", auth, createPlat)
router.get("/:id", auth, getPlat)
router.patch("/:id", auth, updatePlat)
router.delete("/:id", auth, deletePlat)
export default router
