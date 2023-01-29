import restaurant from "../Models/restaurant.js"

export const getAllAboutTheResaurant = async (req, res) => {
  try {
    const all = await restaurant.findOne({ userId: req.userId })
    res.status(200).json(all)
  } catch (error) {
    res.status(404).json({ message: error })
  }
}
export const createRestaurant = async (req, res) => {
  const post = req.body
  console.log(post)
  try {
    const newRestaurant = await restaurant.create({
      ...post,
      userId: req.userId,
    })
    res.status(200).json(newRestaurant)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}
export const createplatOf = async (req, res) => {
  const newdish = req.body
  // console.log(id)
  console.log(newdish)

  try {
    // if (!mongoose.Types.ObjectId.isValid)
    //   return res.status(404).json({ id: "does not exist" })

    const restaurant1 = await restaurant.findOne({ userId: req.userId })
    if (!restaurant1) res.status(404).json({ error: "not found" })
    console.log(restaurant1)
    let newdishes = restaurant1.dishes
    console.log(newdishes)
    newdishes.push(newdish)

    console.log(restaurant1)
    await restaurant1.save()
    res.status(201).json(restaurant1.dishes)
  } catch (error) {
    res.status(404).json({ error: error })
  }
}
