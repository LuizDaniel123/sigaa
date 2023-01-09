import styled from "styled-components";

const Container = styled.header`
    display: flex;
    flex-direction: column;
    height: 9rem;
    width: 98%;

    div#div-titulo {
        background-color: #404E82 ;
        border-bottom: 3px solid #D99C44;
        display: flex;
        align-items: center;
        height: 20%;
        width: 100%;

        h1 {
            font-size: 15px;
            color: white;
            margin-left: 5px;
        }

        p {
            color: white;
            margin-left: 10px;
        }
    }

    div#painel-usuario {
        background-color: #C4D2EB;
        height: 50%;
        width: 100%;
    }

    div#div-atencao {
        background-color: #EFF3FA;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 30%;
        width: 100%;

        h1 {
            font-size: 15px;
            color: #F00;
        }
    }
`;

export default Container;
