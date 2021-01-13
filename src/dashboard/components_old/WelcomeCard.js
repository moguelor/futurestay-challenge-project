import react from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import desktopCharacter from "../../common/resources/character/desktop-character.png";

const StyledDiv = styled.div`
  width: 100%;
  height: 150px;
  padding: 20px 40px;
  color: #fff;
  background: linear-gradient(
    111.23deg,
    #337 13.91%,
    #4852aa 68%,
    #3e79d1 118.92%,
    #349dc5 166.65%
  );
  border-radius: 20px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const Subtitle = styled.span`
  font-size: 14px;
  line-height: 20px;
`;

const Button = styled.button`
  font-size: 12px;
  font-weight: 500;
  padding: 8px 4px;
  background-color: #ede294;
  border-radius: 100px;
  border: none;
  margin-top: 16px;
`;

const Image = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const WelcomeCard = ({ name }) => {
  return (
    <StyledDiv>
      <Title>Welcome back, {name}!</Title> <br />
      <Subtitle>
        You've reached your booking goal this month! <br /> Time to celebrate!
      </Subtitle>{" "}
      <br />
      <Button> Check business performance </Button>
      <Image src={desktopCharacter} />
    </StyledDiv>
  );
};

export default WelcomeCard;
