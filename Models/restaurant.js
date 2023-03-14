import mongoose from "mongoose"
import dishSchem from "./dishe.js"
import * as mod from "./command.js"
const dishSchema = mongoose.model("dish").schema
const commandSchema = mongoose.model("commande").schema

export const schema = mongoose.Schema({
  restaurant_name: String,
  description: String,
  image: String,
  lat: Number,
  long: Number,
  numero: Number,
  rue: String,
  ville: String,
  codepostal: Number,
  rating: Number,
  category: String,
  dishes: [dishSchema],
  commandes: [commandSchema],
  userId: String,
})

// Client Schema

export default mongoose.model("restaurant", schema)
