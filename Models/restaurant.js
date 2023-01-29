import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
  category_name: String,
  category_image: String,
})

const dishSchema = mongoose.Schema({
  dishname: String,
  description: String,
  price: Number,
  image: String,
})

const restaurantSchema = mongoose.Schema({
  restaurant_name: String,
  description: String,
  image: String,
  lat: Number,
  long: Number,
  address: String,
  rating: Number,
  category: categorySchema,
  dishes: [dishSchema],
  userId: String,
})
// const threetypeSchema = mongoose.Schema({
//   type_name: String,
//   description: String,
//   restaurant: [restaurantSchema],
// })
const restaurant = mongoose.model("resto", restaurantSchema)
export default restaurant
