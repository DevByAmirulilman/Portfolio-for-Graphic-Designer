import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html{
        @media (max-width: 1500px) {
            font-size: 85%;
        }
    }
    body{
        background: #ffffff;
        font-family: 'Inter', sans-serif;
        }
    button{
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        transition: all 0.5s ease;
        &:hover {
        background: #F05A5C;
        color: white;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
        color: black;
    }
    h3{
        color:white;
    }
    p{
        padding: 3rem 0rem;
        color: #7e7e7e;
        font-size: 1.4rem;
        line-height: 150%;
    }
    h4{
        font-size: 2.5rem;
    }
    a{
        font-size: 1.1.rem;
    }
`;
export default GlobalStyle;
