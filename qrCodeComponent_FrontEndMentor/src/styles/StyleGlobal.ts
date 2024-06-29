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
    }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  padding: 51.5px;

  @media screen and (max-width: 375px) {
    max-width: 375px;
    width: 90%;
  }
`;
