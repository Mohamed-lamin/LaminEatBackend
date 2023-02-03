import mongoose from "mongoose"
import restaurant from "./restaurant.js"
const threetypeSchema = mongoose.Schema({
  type_name: String,
  description: String,
  restaurants_array: [{ type: mongoose.Schema.Types.ObjectId, ref: "resto" }],
})

const categoryForMobile = mongoose.model("Category", threetypeSchema)
export default categoryForMobile
