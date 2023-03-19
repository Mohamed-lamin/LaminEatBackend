import mongoose from "mongoose"

export const schema = new mongoose.Schema({
  dishname: String,
  categorie: String,
  description: String,
  price: Number,
  category: [],
  image: String,
})

export default mongoose.model("dish", schema)
