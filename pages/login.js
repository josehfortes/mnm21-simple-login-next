import Link from 'next/link'

import styles from '../styles/Login.module.css'

import LoginCard from '../src/components/cards/loginCard/login'
import Input from '../src/components/forms/input/input'
import Button from '../src/components/forms/button/button'

export default function LoginPage() {
  return (
    <div className={styles.background}>
      <LoginCard title="Faça seu login">
        <form className={styles.form}>
          <Input type="e-mail" placeholder="Seu e-mail" required />
          <Input type="password" placeholder="Sua senha" required />
          <Button>Entrar</Button>
          <Link href="/cadastro">Não possui uma conta?</Link>
        </form>
      </LoginCard>
    </div>
  )
}
