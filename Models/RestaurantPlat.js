import mongoose from "mongoose"

const postSchema = mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  selectedFile: String,
  restaurantId: String,
})

const RestaurantPlat = mongoose.model("RestaurantPlat", postSchema)

export default RestaurantPlat
