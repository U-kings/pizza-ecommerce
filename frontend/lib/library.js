import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "@values/colors";

export const Container = styled.div`
    width: 100%;
    padding: 0 3rem;
    /* background-color: orange; */

    & .row{
        display: flex;
        justify-content: space-between;
    }

    & .card{
        padding: 2.5rem;
        border-radius: .7rem;
        background-color: ${COLORS.grey2};
    }

    & .parent{ 
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .parent .child{ 
        flex: 1 1 25%;
        /*Start Run Code Snippet output CSS*/
        padding: 5px; 
        box-sizing: border-box;
        text-align: center;
        border: 1px solid #000;
        flex-grow: 1;
        flex-shrink: 0;
        /* flex-basis: calc(25% - 10px); */
        /*End Run Code Snippet output CSS*/
    }
`;

