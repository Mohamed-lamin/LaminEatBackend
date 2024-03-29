import mongoose from "mongoose"

const schema = mongoose.Schema({
  clientId: String,
  restaurantId: String,
  clientName: String,
  clientImage: String,
  commandes: Array,
  total: Number,
  status: String,
})

export default mongoose.model("commande", schema)
