import mongoose from "mongoose"

const CollectionSchema = mongoose.Schema({
  type_name: String,
  description: String,
  restaurants: [restaurantSchema],
})

export default mongoose.model("Collection", CollectionSchema)
