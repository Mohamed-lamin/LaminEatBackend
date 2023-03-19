import mongoose from "mongoose"
import dishSchem from "./dishe.js"
import * as mod from "./command.js"
import categorySchema from "./category.js"
const dishSchema = mongoose.model("dish").schema
const commandSchema = mongoose.model("commande").schema
const category = mongoose.model("category").schema

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
  category: category,
  dishes: [dishSchema],
  commandes: [commandSchema],
  userId: String,
})

// Client Schema

export default mongoose.model("restaurant", schema)
