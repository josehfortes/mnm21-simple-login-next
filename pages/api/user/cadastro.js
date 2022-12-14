import { cadastro } from "../../../services/user"

export default function handler(req, res) {
  try {
    const newUser = cadastro(req.body)
    res.status(200).json(newUser)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
