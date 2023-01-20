import express from "express"
import mongoose from "mongoose"

import RestaurantPlat from "../models/RestaurantPlat.js"

const router = express.Router()

export const getPlats = async (req, res) => {
  try {
    const RestaurantPlats = await RestaurantPlat.find()

    res.status(200).json(RestaurantPlats)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const getPlat = async (req, res) => {
  const { id } = req.params

  try {
    const SpecificPlat = await RestaurantPlat.findById(id)

    res.status(200).json(SpecificPlat)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const createPlat = async (req, res) => {
  const { title, description, selectedFile } = req.body

  const newRestaurantPlat = new RestaurantPlat({
    title,
    description,
    selectedFile,
  })

  try {
    await newRestaurantPlat.save()

    res.status(201).json(newRestaurantPlat)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePlat = async (req, res) => {
  const { id } = req.params
  const { title, description, selectedFile } = req.body

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`)

  const updatedResaurantPlat = { title, description, selectedFile, _id: id }

  await RestaurantPlat.findByIdAndUpdate(id, updatedResaurantPlat, {
    new: true,
  })

  res.json(updatedResaurantPlat)
}

export const deletePlat = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`)

  await PostMessage.findByIdAndRemove(id)

  res.json({ message: "Plat supprimé en success." })
}

export default router
