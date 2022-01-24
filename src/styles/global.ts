import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `

    :root{
        --background: #f0f2f5;
        --green: #33CC95;
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* padrão da aplicação, font-size 16px (Desktop)    */

    html {
        /* quando o usuário estiver em uma tela com até 1080px */
        @media (max-width: 1080px) {
            font-size: 93.75%; /* 15px */
        }

        @media (max-width: 720px) {
            font-size: 87.5% /*14px*/
            /* coloco as fontes em percentuais para se adaptar a qualquer dispositivo */
        }
    }

    /* REM = 1 rem = font-size da minha página */

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
     /* coloco acima deste modo para que todos os browsers fiquem com a letra "bonita"  */
    }

    body, input, textarea, button {
        /*coloco de todos esses pois por padrão eles têm suas fontes próprias*/
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer; 
    }

    [disabled] {
        /* tudo que estiver desabilitado na minha página, ficara mais opaco */
        opacity: 0.6;
        cursor: not-allowed; 
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed; 
        /* position fixed: fica em cima da tela */
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;

    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }






`