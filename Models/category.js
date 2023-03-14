import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
  category_name: String,
  category_image: String,
})

export default mongoose.model("category", categorySchema)
