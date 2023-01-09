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
        justify-content: center;
        height: 30%;
        width: 100%;

        form {
            align-items: center;
            background-color: #FAFAFA;
            border: 3px solid #C8D5EC;
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: 100%;
            width: 48.33%;

            input {
                background-color: rgb(232, 240, 254);
                border: 2px solid #AAA;
                height: 10%;
                margin-top: 15px;
            }

            label {
                margin-top: 10px;
            }

            h1 {
                font-size: 25px;
                color: #003395;
            }

        }
        
    }
`;

export default Container
