import { client } from "../Models/restaurant"

export const clientSignin = async (req, res) => {
  const { email, password } = req.body

  try {
    const oldClient = await client.findOne({ email })

    if (!oldClient)
      return res.status(404).json({ message: "utilisateur n'existe pas" })

    const isPasswordCorrect = await bcrypt.compare(password, oldClient.password)

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Identifiants non valides" })

    const token = jwt.sign(
      { email: oldClient.email, id: oldClient._id },
      secret,
      {
        expiresIn: "1h",
      }
    )

    res.status(200).json({ result: oldClient, token })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const clientSignup = async (req, res) => {
  const { email, password, firstname, lastname, profileimage } = req.body

  try {
    const oldClient = await client.findOne({ email })

    if (oldClient)
      return res.status(400).json({ message: "utilisateur existe déja" })

    const hashedPassword = await bcrypt.hash(password, 12)

    const result = await client.create({
      email,
      password: hashedPassword,
      name: `${firstname} ${lastname}`,
      profileimage,
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
