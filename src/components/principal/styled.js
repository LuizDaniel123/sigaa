import styled from "styled-components";

const Container = styled.div`
    margin-top: 2%;
    height: 78%;
    width: 98%;

    div#quatro-divs {
        display: flex;
        height: 15%;
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
        justify-content: center;
        height: 30%;
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
            height: 20%;
            width: 80%;

            input {
                background-color: rgb(232, 240, 254);
                border: 2px solid #AAA;
                height: 30%;
                margin-left: 20px;
            }

            input:nth-child(3) {
                height: 50%;
            }

            label {
                margin-left: 20px;
            }

        }
        
    }
`;

export default Container
