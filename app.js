import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()
import platRoutes from "./routes/RoutesResaurantPosts.js"
import userRoutes from "./routes/user.js"

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/plats", platRoutes)
app.use("/user", userRoutes)

const PORT = process.env.PORT || 5000
const CONNECTIONURL = process.env.CONNECTION

mongoose
  .connect(CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))
  )
  .catch(error => console.log(`${error} did not connect`))
mongoose.set("strictQuery", true)
