import styled from "styled-components";
import variaveis from "../styles/variaveis";

export type Props = {
  textType: "h1" | "p";
};

export const BackgroundCard = styled.div`
  max-width: 320px;
  width: 100%;
  height: 497px;
  background-color: ${variaveis.white};
  padding: 16px;
  border-radius: 20px;

  @media screen and (max-width: 375px) {
    width: 375px;
  }
`;

export const Div = styled.div`
  display: flex;
  max-width: 288px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 16px;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 441px;
  width: 100%;
  padding: 8px;

  h1 {
    margin-bottom: 16px;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${variaveis.darkBlue};
`;

export const P = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: ${variaveis.greyBlue};
`;
