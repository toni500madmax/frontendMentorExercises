import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

export const StyleGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Outfit";
    }

    body {
        background-color: ${variaveis.lightGrey};
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;

  @media screen and (max-width: 375px) {
    max-width: 375px;
    width: 90%;
  }
`;
