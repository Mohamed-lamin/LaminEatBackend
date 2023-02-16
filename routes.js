import express from "express"
import {
  CatList,
  clientSignin,
  clientSignup,
  createPlats,
  createRestaurant,
  createType,
  deletePlat,
  getCatList,
  getPlats,
  signin,
  signup,
  updatePlat,
} from "./controller.js"
const router = express.Router()

// Create Type once
router.post("/createtype", createType)
// Add to type
router.post("/type/:id", CatList)
router.get("/types", getCatList)
// Create Restaurant and Plats
router.post("/restaurant/:id", createRestaurant)
router.post("/restaurant/plats/:id", createPlats)
router.get("/restaurant/plats/:id", getPlats)
router.post("/restaurant/deleteplat/:id", deletePlat)
router.patch("/restaurant/updateplat/:id", updatePlat)
// client routes
router.post("/clientsignup", clientSignup)
router.post("/clientsignin", clientSignin)

// User Auth
router.post("/signin", signin)
router.post("/signup", signup)

export default router
