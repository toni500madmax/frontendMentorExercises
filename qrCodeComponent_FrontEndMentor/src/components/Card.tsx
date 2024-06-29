import { BackgroundCard, Div, H1, Img, P, TextBlock } from "./style";

const Card = () => {
  return (
    <BackgroundCard>
      <Div>
        <Img
          src="/images/image-qr-code.png"
          alt="The Front-End Mentor QRCode Component"
        />
        <TextBlock>
          <H1>Improve your front-end skills by building projects</H1>
          <P>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </P>
        </TextBlock>
      </Div>
    </BackgroundCard>
  );
};

export default Card;
