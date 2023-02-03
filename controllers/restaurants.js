// import { assignCategory } from "../Models/categories.js"
import categoryForMobile from "../Models/categories.js"
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
    assignCategory()
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

export const getAllRestaurants = async (req, res) => {
  try {
    const allRestaurants = await restaurant.find()
    // res.status(200).json(allRestaurants)

    return res.status(200).json(allRestaurants)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
export const assignCategory = async (req, res) => {
  const allresults = await restaurant.find()
  for (let i = 0; i < allresults.length; i++) {
    if (allresults[i].description.includes("amuser")) {
      const category1 = await categoryForMobile.findOneAndUpdate(
        { type_name: "Séléction" },
        {
          type_name: "Séléction",
          description: "Decouvrez les offres des restaurants partenaires",
          restaurants_array: allresults[i],
        }
      )

      await category1.save()
    }
    if (allresults[i].description.includes("partenaire")) {
      const category2 = await categoryForMobile.findOneAndUpdate(
        { type_name: "Reduction" },
        {
          type_name: "Reduction",
          description: "Decouvrez les offres des restaurants partenaires",
          restaurants_array: { ...allresults[i] },
        }
      )
      await category2.save()
    } else {
      const category3 = await categoryForMobile.findOneAndUpdate(
        { type_name: "Offre à coté" },
        {
          type_name: "Offre à coté",
          description: "Decouvrez les offres des restaurants partenaires",
          restaurants_array: allresults[i],
        }
      )
      await category3.save()
    }
  }
}
export const allCategories = async (req, res) => {
  try {
    const allCategories = await categoryForMobile.find()
    return res.status(200).json(allCategories)
  } catch (error) {
    console.log(error)
  }
}
