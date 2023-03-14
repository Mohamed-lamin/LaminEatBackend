import mongoose from "mongoose"
import restaurantSchema from "./restaurant.js"

const restaurant = mongoose.model("restaurant").schema
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  userRestaurant: restaurant,
})

export default mongoose.model("User", userSchema)
