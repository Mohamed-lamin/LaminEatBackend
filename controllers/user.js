import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import UserModal from "../Models/user.js"

const secret = "test"

export const signin = async (req, res) => {
  const { email, password } = req.body

  try {
    const result = await UserModal.findOne({ email })

    if (!result)
      return res.status(404).json({ message: "utilisateur n'existe pas" })

    const isPasswordCorrect = await bcrypt.compare(password, result.password)

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Identifiants non valides" })

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    })

    res.status(200).json({ result, token })
  } catch (err) {
    res.status(500).json({ message: "une erreur est survenue" })
    console.log(err.message)
  }
}

export const signup = async (req, res) => {
  const { email, password, firstname, lastname } = req.body
  console.log({ email, password, firstname, lastname })
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
    res.status(500).json({ message: error.message })

    console.log(error)
  }
}
