import React from 'react'
import Container from './styled'

export default function Principal() {
  return (
    <Container>

        <div id='quatro-divs'>

            <div>
                <h1>SIGAA</h1>
                <p>(Acadêmico)</p>
            </div>

            <div>
                <h1>SIPAC</h1>
                <p>(Administrativo)</p>
            </div>

            <div>
                <h1>SIGRH</h1>
                <p>(Recursos Humanos)</p>
            </div>

            <div>
                <h1>SIGAdmin</h1>
                <p>(Administração e Comunicação)</p>
            </div>

        </div>

        <div id='tres-p'>

            <p>Perdeu o e-mail de confirmação de cadastro? Clique aqui para recuperá-lo.</p>

            <p>Esqueceu o login? Clique aqui para recuperá-lo.</p>

            <p>Esqueceu a senha? Clique aqui para recuperá-la.</p>

        </div>

        <div id='div-form'>

            <h1>Entrar no Sistema</h1>

            <form>
                
                <label>Usuário: </label>

                <input type="text" name="texto" id="texto"/>

                <label>Senha: </label>

                <input type="password" name="password" id="password" />

                <input type="submit" value="Entrar" />

            </form>

        </div>

        <div id='duas-div'>

            <div>

                <p>Professor ou Funcionário,</p>
                <p>caso ainda não possua cadastro no SIGAA,</p>
                <p>clique no link abaixo.</p>
                <p>Cadastre-se</p>

            </div>

            <div>

                <p>Aluno,</p>
                <p>caso ainda não possua cadastro no SIGAA,</p>
                <p>clique no link abaixo.</p>
                <p>Cadastre-se</p>

            </div>

        </div>

        <div id='dois-p-footer'>
            <p>Este sistema é melhor visualizado utilizando o Mozilla Firefox, para baixá-lo e instalá-lo, clique aqui.</p>
            <p>Para visualizar documentos é necessário utilizar o Adobe Reader, para baixá-lo e instalá-lo, clique aqui.</p>
        </div>

        <div id='footer-div'>
            <p>Diretoria Sistêmica de Gestão de Tecnologia da Informação - DSGTI - IFAC | Copyright © 2006-2023 - UFRN - celacanto.ifac.edu.br.srv3inst1 - v4.0.341 09/01/2023 22:30</p>
        </div>

    </Container>
  )
}
