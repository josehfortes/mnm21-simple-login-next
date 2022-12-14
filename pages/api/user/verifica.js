import { verifica } from "../../../services/user"

export default function handler(req, res) {
  try {
    const token = req.headers['authorization']
    const isValid = verifica(token)
    if (isValid) res.status(200).json('')
    else res.status(401).json('')
  } catch (err) {
    res.status(400).json(err.message)
  }
}