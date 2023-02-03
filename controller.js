import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const categorySchema = mongoose.Schema({
  category_name: String,
  category_image: String,
})

const dishSchema = mongoose.Schema({
  dishname: String,
  description: String,
  price: Number,
  image: String,
})

const restaurantSchema = mongoose.Schema({
  restaurant_name: String,
  description: String,
  image: String,
  lat: Number,
  long: Number,
  address: String,
  rating: Number,
  category: categorySchema,
  dishes: [dishSchema],
  userId: String,
})
const TypeSchema = mongoose.Schema({
  type_name: String,
  description: String,
  restaurants_array: [restaurantSchema],
})

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  restaurantUser: restaurantSchema,
})

const type = mongoose.model("Type", TypeSchema)
const restaurant = mongoose.model("restaurant", restaurantSchema)
const dish = mongoose.model("dish", dishSchema)
const UserModal = mongoose.model("User", userSchema)

export const createType = async (req, res) => {
  const { type_name, description } = req.body

  try {
    const newType = await type.create({
      type_name,
      description,
    })
    await newType.save()
    return res.status(200).json({ message: "it is done" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
// Singin in and up

const secret = "test"

export const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    const oldUser = await UserModal.findOne({ email })

    if (!oldUser)
      return res.status(404).json({ message: "utilisateur n'existe pas" })

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Identifiants non valides" })

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    })

    res.status(200).json({ result: oldUser, token })
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenue" })
  }
}

export const signup = async (req, res) => {
  const { email, password, firstname, lastname } = req.body

  try {
    const oldUser = await UserModal.findOne({ email })

    if (oldUser)
      return res.status(400).json({ message: "utilisateur existe déja" })

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: `${firstname} ${lastname}`,
    })

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    })

    res.status(201).json({ result, token })
  } catch (error) {
    res.status(500).json({ message: "Une erreur est survenue" })

    console.log(error)
  }
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Creating Restaurant
export const createRestaurant = async (req, res) => {
  const {
    restaurant_name,
    description,
    image,
    lat,
    long,
    address,
    rating,
    category,
  } = req.body

  const UserId = req.params.id

  try {
    const newRestaurant = await restaurant.create({
      restaurant_name,
      description,
      image,
      lat,
      long,
      address,
      rating,
      category,
    })
    await newRestaurant.save()

    const updateduser = await UserModal.findByIdAndUpdate(
      UserId,
      { _id: UserId, restaurantUser: newRestaurant },
      { new: true }
    )
    await updateduser.save()
    console.log(updateduser)
    return res.status(200).json(updateduser)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
// Creating Plats

export const createPlats = async (req, res) => {
  const { dishname, description, price, image } = req.body
  console.log(dishname, description, price, image)
  const { id } = req.params

  try {
    const createdPlat = await dish.create({
      dishname,
      description,
      price,
      image,
    })
    await createdPlat.save()
    const restaurantToUpdate = await restaurant.findById({ _id: id })
    console.log(restaurantToUpdate.dishes)
    restaurantToUpdate.dishes.push(createdPlat)
    await restaurantToUpdate.save()

    const restaurantUser = await UserModal.findOneAndUpdate(
      { restaurantToUpdate },
      { restaurantUser: restaurantToUpdate }
    )
    const theTypeD = await type.findOneAndUpdate(
      { restaurantToUpdate },
      { restaurants_array: { ...restaurantToUpdate } }
    )
    await restaurantUser.save()
    await theTypeD.save()
    return res.status(200).json(...restaurantToUpdate.dishes.slice(-1))
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
// get All Plats
export const getPlats = async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const restaurantToDisplay = await restaurant.findById({ _id: id })
    return res.status(200).json(restaurantToDisplay.dishes)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
// delete Plat
export const deletePlat = async (req, res) => {
  const { id } = req.params
  const plat = req.body
  const thePlaId = plat.PlatId
  console.log(plat)
  try {
    await dish.findByIdAndRemove({ _id: thePlaId })
    const theRestaurant = await restaurant.findById({ _id: id })

    const restaurantToUpdate = await restaurant.findByIdAndUpdate(
      { _id: id },
      { dishes: theRestaurant.dishes.filter(dish => dish.id !== thePlaId) }
    )
    await restaurantToUpdate.save()
    const CurrentrestaurantUser = await UserModal.findOneAndUpdate(
      { theRestaurant },
      { restaurantUser: restaurantToUpdate }
    )
    await CurrentrestaurantUser.save()

    res
      .status(200)
      .json(restaurantToUpdate.dishes.filter(dish => dish.id === thePlaId))
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
// Update Plat

export const updatePlat = async (req, res) => {
  const { id } = req.params
  const { dishname, description, price, image } = req.body
  const { _id } = req.body
  console.log(_id)
  try {
    const dishToUpdate = await dish.findByIdAndUpdate(
      _id,
      { _id: _id, dishname, description, price, image },
      { new: true }
    )

    console.log(dishToUpdate)
    const theRestaurant = await restaurant.findById({ _id: id })

    await restaurant.findByIdAndUpdate(
      id,
      {
        dishes: theRestaurant.dishes.map(dish =>
          dish.id === _id
            ? { _id: _id, dishname, description, price, image }
            : dish
        ),
      },
      { new: true }
    )

    const CurrentrestaurantUser = await UserModal.findOneAndUpdate(
      { theRestaurant },
      { restaurantUser: theRestaurant }
    )
    await CurrentrestaurantUser.save()

    return res
      .status(200)
      .json({ _id: _id, dishname, description, price, image })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

// CatList

export const CatList = async (req, res) => {
  const { id } = req.params
  const { listName } = req.body
  console.log(listName)
  console.log(id)
  try {
    const theRestaurnt = await restaurant.findById(id)
    const theCatList = await type.findOne({ type_name: listName })
    theCatList.restaurants_array.push(theRestaurnt)
    await theCatList.save()
    return res.status(200).json({ message: theCatList })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
export const getCatList = async (req, res) => {
  try {
    const AllTypes = await type.find()
    return res.status(200).json(AllTypes)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
