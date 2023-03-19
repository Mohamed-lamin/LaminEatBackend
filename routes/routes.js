import express from "express"
import {
  // CatList,
  // clientCommand,
  // clientSignin,
  // clientSignup,
  // commandes,
  // CreateCategory,
  // createPlats,
  //
  // createType,
  // deletePlat,
  // getAllRestaurants,
  // getCategories,
  // getCatList,
  // getPlats,
  // getTheRestaurant,
  // laCommande,
  signin,
  signup,
  // SpecifiCclientCommand,
  // updateCommand,
  // updatePlat,
  // updateRestaurant,
} from "../controllers/user.js"
import {
  createRestaurant,
  getAllRestaurants,
  updateRestaurant,
} from "../controllers/restaurant.js"
import {
  createPlats,
  deletePlat,
  getPlats,
  updatePlat,
} from "../controllers/plats.js"
import {
  commandes,
  laCommande,
  SpecifiCclientCommand,
  updateCommand,
} from "../controllers/command.js"
import { getCategories } from "../controllers/category.js"
const router = express.Router()

// Create Type once
// router.post("/createtype", createType)
// // Add to type.
// router.post("/type/:id", CatList)
// router.get("/types", getCatList)
// // Create Restaurant and Plats
router.post("/restaurant/:id", createRestaurant)
router.patch("/restaurant/:id", updateRestaurant)
router.get("/allrestaurants", getAllRestaurants)
router.post("/restaurant/plats/:id", createPlats)
router.get("/restaurant/plats/:id", getPlats)
router.post("/restaurant/deleteplat/:id", deletePlat)
router.patch("/restaurant/updateplat/:id", updatePlat)
// // client routes
// router.post("/clientsignup", clientSignup)
// router.post("/clientsignin", clientSignin)
// // Restaurants categories
// router.post("/category", CreateCategory)
router.get("/category", getCategories)
// User Auth
router.post("/signin", signin)
router.post("/signup", signup)
// router.get("/restaurantuser/:id", getTheRestaurant)
// router.post("/serveur", ajouterServeur)
// Create command
router.post("/commande/:id", laCommande)
// Update command
router.post("/updatecommand/:id", updateCommand)
// get commands (afficher toutes les commandes)
router.get("/commandes/:id", commandes)
// get Client command
// router.get("/clientcommand/:id", clientCommand)
router.get("/specificcommand/:id", SpecifiCclientCommand)
export default router
