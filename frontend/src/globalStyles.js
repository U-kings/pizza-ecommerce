import { createGlobalStyle } from "styled-components";
import { COLORS } from "@values/colors";

export const GlobalStyle = createGlobalStyle`
    *,html{
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        /* font-family: "Roboto", sans-serif; */
        scroll-behavior: smooth;
    }

    body{
        background-color: ${COLORS.primaryColor};
        width: 100%;
        color: ${COLORS.white};
        /* background-image: linear-gradient(120deg, #141414 0%, #141414 100%); */
        /* background-image: linear-gradient(120deg, #603296 0%, #c00fb1 100%); */
        & h2{
            font-size: 1.8rem;
        }
        & h3{
            font-size: 1.4rem;
        }
        & p{
            font-size: 2rem;
        }
        & input{
            font-size: 1.5rem;
            font-weight: 400;
            color: #fff;
            border: none;
            outline: none;
            background-color: ${COLORS.black5};
        }
        
        & .button__row{
            width: 100%;
            display: flex;
            margin: auto;
            justify-content: left;
            padding: 1.5rem 0 0 0;
            /* background-color: red; */
        }
        & .input__row,.row{
            display: flex;
            justify-content: space-between;
            /* margin: .5rem 0; */

            & .label__group{
                align-self: flex-end;
            }

        }

        & form .label__group{
            width: 100%;
            /* margin: auto; */
            margin-right: .7rem;
            /* height: 6rem; */
            color: ${COLORS.grey};
            justify-content: center;
            /* background-color: green; */
        }
        & form .label__group label{
            font-size: 1.6rem;
            margin-bottom: .5rem;
        }
        & form .label__group:last-child{
            margin-right: 0;
        }

        & textarea { 
            /* will prevent resizing horizontally */
            resize: vertical;
            background-color: ${COLORS.black3};
            font-size: 1.5rem;
            max-width: 35rem;
            padding: 1rem;
            margin: .5rem 0 1rem 0;
            border-radius: .3rem;
            /* background-color: transparent; */
            color: ${COLORS.white};
            outline: none;
            border: none;

        }
        
        & a{
            text-decoration: none;
        }
        & label{
            font-size: 1.5rem;
        }
        & button{
            border: none;
        }

        & .cancel__btn{
                background-color: ${COLORS.black5};
        }
        & .cancel__btn:hover{
            background-color: ${COLORS.black6};
        }
        & .save__btn{
            margin-right: 1rem;
            background-color: ${COLORS.blue2};
        }
        & .save__btn:hover{
            background-color: ${COLORS.blue3};
        }

    }
`;
