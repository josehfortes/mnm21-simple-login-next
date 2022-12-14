import jwt from 'jsonwebtoken'
let users = []

const SECRET = process.env.JWT_SECRET

function generateToken(user) {
  return jwt.sign({ name: user.name, email: user.email }, SECRET)
}

function readToken(token) {
  try {
    return jwt.verify(token, SECRET)
  } catch (err) {
    throw new ('token_invalido')
  }
}

export function cadastro(body) {
  const user = users.find(({ email }) => email === body.email)
  if (user) throw new Error('usuario_ja_cadastrado')

  users.push(body) //substituir por um BD

  const token = generateToken(body)
  return token
}

export function login(body) {
  const user = users.find(({ email }) => email === body.email) //substituir por um bd
  if (!user) throw new Error('usuario_nao_encontrado')
  if (user.password !== body.password) throw new Error('senha_incorreta')

  const token = generateToken(user)
  return token
}

export function verifica(token) {
  return readToken(token)
}