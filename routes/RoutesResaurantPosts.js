import express from "express"

import {
  getPlats,
  getPlat,
  createPlat,
  updatePlat,
  deletePlat,
} from "../controllers/RestaurantPosts.js"

const router = express.Router()

router.get("/", getPlats)
router.post("/", createPlat)
router.get("/:id", getPlat)
router.patch("/:id", updatePlat)
router.delete("/:id", deletePlat)
export default router
