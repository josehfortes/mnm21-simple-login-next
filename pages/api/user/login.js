import { login } from "../../../services/user"

export default function handler(req, res) {
  try {
    const userToken = login(req.body)
    res.status(200).json(userToken)
  } catch (err) {
    res.status(400).json(err.message)
  }
}