import category from "../Models/category.js"

export const getCategories = async (req, res) => {
  try {
    const allCategories = await category.find()
    res.status(200).json(allCategories)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
