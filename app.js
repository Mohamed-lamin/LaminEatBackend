import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import route from "./routes.js"
import * as dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/", route)

const PORT = process.env.PORT || 5000
const CONNECTIONURL = process.env.CONNECTION
console.log(CONNECTIONURL)

mongoose
  .connect(
    "mongodb+srv://daminsoft:RFolSa9Op0jRabl5@cluster0.1mouxyv.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))
  )
  .catch(error => console.log(`${error} did not connect`))
mongoose.set("strictQuery", true)
