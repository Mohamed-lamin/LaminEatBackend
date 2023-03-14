import mongoose from "mongoose"

export const schema = new mongoose.Schema({
  dishname: String,
  categorie: String,
  description: String,
  price: Number,
  image: String,
})

export default mongoose.model("dish", schema)
