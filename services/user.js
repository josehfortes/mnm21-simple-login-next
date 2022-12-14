let users = []

export function cadastro(body) {
  const user = users.find(({ email }) => email === body.email)
  if (user) throw new Error('usuario_ja_cadastrado')

  users.push(body)
  return body
}

export function login(body) {
  const user = users.find(({ email }) => email === body.email)
  if (!user) throw new Error('usuario_nao_encontrado')
  if (user.password !== body.password) throw new Error('senha_incorreta')

  return user
}

