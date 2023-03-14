import mongoose from "mongoose"
const clientSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  profileimage: String,
})

export default mongoose.model("client", clientSchema)
