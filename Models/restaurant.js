import mongoose from "mongoose"

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
  resaurant_name: String,
  description: String,
  image: String,
  lat: Number,
  long: Number,
  address: String,
  rating: Number,
  category: categorySchema,
  dishes: [dishSchema],
})
const threetypeSchema = mongoose.Schema({
  type_name: String,
  description: String,
  restaurant: [restaurantSchema],
})
const ThreetypeSchema = mongoose.model("Restaurant", threetypeSchema)
export default ThreetypeSchema

export const rmp = async () => {
  const res = await ThreetypeSchema.create(
    {
      type_name: "Offre pres de toi",
      description: "Pourquoi vous n'essayez pas vos restaurants locaux",
      restaurant: [
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
      ],
    },
    {
      type_name: "Partenaire",
      description: "nos partenaire",
      restaurant: [
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
      ],
    },
    {
      type_name: "reduction",
      description: "nos partenaire",
      restaurant: [
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
        {
          resaurant_name: "Mcdonald",
          description: "Amuse toi avec nos repas délicieux",
          image:
            "https://startling-blini-3bec23.netlify.app/images/mcdonald.jpg",
          long: 51,
          lat: 52,
          address: "Route de Toulouse",
          rating: 5,
          category: {
            category_name: "Offre",
            category_image:
              "https://startling-blini-3bec23.netlify.app/images/2.png",
          },
          dishes: [
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
            {
              dishname: "Cocakola",
              description: "tres bonne",
              price: 12,
              image: "https://startling-blini-3bec23.netlify.app/images/2.png",
            },
          ],
        },
      ],
    }
  )
  await res.save()
}

export const affich = async (req, res) => {
  const all = await ThreetypeSchema.find()
  res.send(all)
}
