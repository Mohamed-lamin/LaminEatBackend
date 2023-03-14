import restaurant from "../Models/restaurant.js"
import User from "../Models/user.js"

export const createRestaurant = async (req, res) => {
  console.log("helloiiiiiiiiiiiiiiiiii")
  const {
    restaurant_name,
    description,
    image,
    lat,
    long,
    numero,
    rue,
    ville,
    codepostal,
    rating,
    category_name,
  } = req.body
  console.log(category_name, restaurant_name)
  const UserId = req.params.id

  try {
    const newRestaurant = await restaurant.create({
      restaurant_name,
      description,
      image,
      lat,
      long,
      numero,
      rue,
      ville,
      codepostal,
      rating,
      category: category_name,
    })
    await newRestaurant.save()

    const updateduser = await User.findByIdAndUpdate(
      UserId,
      { _id: UserId, userRestaurant: newRestaurant },
      { new: true }
    )
    await updateduser.save()

    return res.status(200).json({ result: updateduser })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
// get the specific restaurant

export const getTheRestaurant = async (req, res) => {
  const { id } = req.params

  try {
    const theRestauant = await restaurant.findById(id)
    return res.status(200).json(theRestauant)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
export const getAllRestaurants = async (req, res) => {
  console.log("res")
  try {
    const Allrestaurants = await restaurant.find()
    return res.status(200).json(Allrestaurants)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

// Updating restaurant
export const updateRestaurant = async (req, res) => {
  const {
    restaurant_name,
    description,
    image,
    lat,
    long,
    numero,
    rue,
    ville,
    codepostal,
    rating,
    category,
    _id,
  } = req.body
  console.log({
    restaurant_name,
    description,
    image,
    lat,
    long,
    numero,
    rue,
    ville,
    codepostal,
    rating,
    category,
    _id,
  })
  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`pas de restaurant avec id : ${_id}`)
    const updatedRestaurant = {
      restaurant_name,
      description,
      image,
      lat,
      long,
      numero,
      rue,
      ville,
      codepostal,
      rating,
      category,
      _id: _id,
    }

    await restaurant.findByIdAndUpdate(_id, updatedRestaurant, {
      new: true,
    })

    const newuser = await UserModal.findByIdAndUpdate(
      id,
      { restaurantUser: updatedRestaurant },
      { new: true }
    )
    return res.status(200).json({ result: newuser })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
