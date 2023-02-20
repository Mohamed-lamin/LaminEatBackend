import express from "express"
import {
  CatList,
  clientSignin,
  clientSignup,
  commandes,
  CreateCategory,
  createPlats,
  createRestaurant,
  createType,
  deletePlat,
  getCategories,
  getCatList,
  getPlats,
  laCommande,
  signin,
  signup,
  updatePlat,
  updateRestaurant,
} from "./controller.js"
const router = express.Router()

// Create Type once
router.post("/createtype", createType)
// Add to type
router.post("/type/:id", CatList)
router.get("/types", getCatList)
// Create Restaurant and Plats
router.post("/restaurant/:id", createRestaurant)
router.post("/restaurant", updateRestaurant)
router.post("/restaurant/plats/:id", createPlats)
router.get("/restaurant/plats/:id", getPlats)
router.post("/restaurant/deleteplat/:id", deletePlat)
router.patch("/restaurant/updateplat/:id", updatePlat)
// client routes
router.post("/clientsignup", clientSignup)
router.post("/clientsignin", clientSignin)
// Restaurants categories
router.post("/category", CreateCategory)
router.get("/category", getCategories)
// User Auth
router.post("/signin", signin)
router.post("/signup", signup)
// Create command
router.post("/commande/:id", laCommande)
// get commands (afficher toutes les commandes)
router.get("/commands/:id", commandes)
export default router
