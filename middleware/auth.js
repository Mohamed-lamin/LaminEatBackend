import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const isCustomToken = token.length < 500
    let decodeToken

    if (token && isCustomToken) {
      decodeToken = jwt.verify(token, "test")
      req.userId = decodeToken?.id
    } else {
      decodeToken = jwt.decode(token)
      req.userId = decodeToken?.sub
    }
    next()
  } catch (error) {
    console.log(error)
  }
}
export default auth
