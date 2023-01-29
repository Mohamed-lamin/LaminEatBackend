import express from "express"

import {
  getPlats,
  getPlat,
  createPlat,
  updatePlat,
  deletePlat,
} from "../controllers/RestaurantPosts.js"
import auth from "../middleware/auth.js"
import {
  getAllAboutTheResaurant,
  createplatOf,
  createRestaurant,
} from "../controllers/restaurants.js"

const router = express.Router()

// router.get("/", auth, affich)

router.get("/restaurants", auth, getAllAboutTheResaurant)
router.patch("/restaurants", auth, createplatOf)
router.post("/", auth, createPlat)
router.get("/:id", auth, getPlat)
router.patch("/:id", auth, updatePlat)
router.delete("/:id", auth, deletePlat)
router.post("/restaurants", auth, createRestaurant)
export default router
