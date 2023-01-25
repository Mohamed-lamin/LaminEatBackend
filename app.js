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
// app.use("/", Restaurants)
// app.use("/f", async (req, res) => {
//   try {
//     const restaurants = await fetch("http://localhost:3000/Restaurant")
//     const res = await restaurants.json()
//     for (let i = 0; i < res.length; i++) {
//       const restaurant = new Restaurants({
//         name: res[i].name,
//         address: res[i].address,
//         rating: res[i].rating,
//         latitude: res[i].latitude,
//         longitude: res[i].longitude,
//         dishes: res[i].dishes,
//         image: res[i].image,
//         category: res[i].category,
//       })
//       await restaurant.save()
//     }

//     // await restaurant.save()
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// })
// app.use("/", (req, res) => {
//   res.send("Salut tu es sur le site backend de LaminEAT")
// })
const PORT = process.env.PORT || 5000
const CONNECTIONURL = process.env.CONNECTION

mongoose
  .connect(CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))
  )
  .catch(error => console.log(`${error} did not connect`))
mongoose.set("strictQuery", true)
