import Link from 'next/link'
import styles from '../styles/Cadastro.module.css'

import LoginCard from '../src/components/cards/loginCard/login'
import Input from '../src/components/forms/input/input'
import Button from '../src/components/forms/button/button'

export default function CadastroPage() {
  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua conta">
        <form className={styles.form}>
          <Input type="text" placeholder="Seu nome" required />
          <Input type="e-mail" placeholder="Seu e-mail" required />
          <Input type="password" placeholder="Sua senha" required />
          <Button>Cadastrar</Button>
          <Link href="/login">Já possui uma conta?</Link>
        </form>
      </LoginCard>
    </div>
  )
}
