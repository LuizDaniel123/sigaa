import React from 'react'
import Container from './styled'

export default function Header() {
  return (
    <Container>

        <div id='div-titulo'>
            <h1>IFAC - SIGAA - </h1>
            <p>Sistema Integrado de Gestão de Atividades Acadêmicas</p>
        </div>

        <div id='painel-usuario'>
        </div>

        <div id='div-atencao'>
            <h1>ATENÇÃO!</h1>
            <p>O sistema diferencia letras maiúsculas de minúsculas APENAS na senha, portanto ela deve ser digitada da mesma maneira que no cadastro.</p>
        </div>

    </Container>
  )
}
