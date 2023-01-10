import styled from "styled-components";

const Container = styled.div`
    margin-top: 2%;
    height: 78%;
    width: 98%;

    div#quatro-divs {
        display: flex;
        height: 8%;
        width: 100%;
        justify-content: space-between;

        div {
            align-items: center;
            background-color: #EFF3FA;
            border: 2px solid #AAA;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            width: 22.5%;

            h1 {
                font-size: 20px;
                color: #003395;
            }

            p {
                font-size: 15px;
            }
        }

        div:nth-child(1) {
            background-color: #FFFFE4;
        }
    }

    div#tres-p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 15%;
        width: 100%;

        p {
            color: #003395;
        }
    }

    div#div-form {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 20%;
        width: 100%;

        h1 {
            color: #003395;
            margin-bottom: 20px;
            font-size: 25px;
        }

        form {
            align-items: center;
            background-color: #FAFAFA;
            border: 3px solid #C8D5EC;
            display: flex;
            justify-content: center;
            height: 3rem;
            width: 80%;

            input {
                background-color: rgb(232, 240, 254);
                border: 2px solid #AAA;
                height: 1.5rem;
                margin-left: 20px;
            }

            label {
                margin-left: 20px;
            }

        }
        
    }

    div#duas-div {
        display: flex;
        justify-content: space-around;
        height: 20%;

        div {
            display: flex;
            height: 100%;
            width: 30%;
            flex-direction: column;
            align-items: center;

            p {
                margin-top: 2%;
            }

            p:nth-child(1) {
                font-weight: bold;
            }

            p:nth-child(4) {
                color: #003395;
            }
        }
    }
    
    div#dois-p-footer {
        align-items: center;
        display: flex;
        margin-top: 1%;
        flex-direction: column;
        justify-content: center;
        height: 10%;
        width: 100%;

        p {
            font-weight: bold;
            margin-top: 10px;
        }
    }

    div#footer-div {
        align-items: center;
        border-top: 3px solid #D99C44 ;
        background-color: #404E82;
        display: flex;
        margin-top: 7.3%;
        justify-content: center;
        height: 5%;
        width: 100%;
    }
`;

export default Container
