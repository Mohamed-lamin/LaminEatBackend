import dishe from "../Models/dishe.js"
import restaurant from "../Models/restaurant.js"
import mongoose from "mongoose"
export const createPlats = async (req, res) => {
  const { dishname, description, price, image } = req.body
  console.log(dishname, description, price, image)
  const { id } = req.params

  try {
    const createdPlat = await dishe.create({
      dishname,
      description,
      price,
      image,
    })
    await createdPlat.save()
    const { dishes } = await restaurant.findById(id)
    await restaurant.findByIdAndUpdate(
      id,
      { dishes: [...dishes, createdPlat] },
      { new: true }
    )
    return res.status(200).json(createdPlat)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
// get All get Plats
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
  const { PlatId } = req.body

  console.log(PlatId)

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("plat pas trouvé")
    await dishe.findByIdAndRemove(PlatId)
    const { dishes } = await restaurant.findById(id)
    const outputDishes = dishes.filter(d => (d._id != PlatId ? d : null))
    console.log(outputDishes)
    await restaurant.findByIdAndUpdate(
      id,
      { dishes: outputDishes },
      { new: true }
    )
    res.status(200).json({ id: PlatId })
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
    const dishToUpdate = await dishe.findByIdAndUpdate(
      _id,
      { _id: _id, dishname, description, price, image },
      { new: true }
    )
    const { dishes } = await restaurant.findById(id)
    await restaurant.findByIdAndUpdate(
      id,
      { dishes: dishes.map(d => (d._id != _id ? d : dishToUpdate)) },
      { new: true }
    )
    return res.status(200).json(dishToUpdate)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
