import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";
import { Row, Col } from "react-bootstrap";
import styled, { useTheme, ThemeContext } from "styled-components";

const StyledDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 15px;
  border-radius: 20px;
  margin: 15px 0px;
  box-shadow: 0px 0px 10px rgba(145, 151, 204, 0.3);
`;

const CardPlaceholder = ({ rows = 3 }) => {

  const theme = useTheme(ThemeContext);

  return (
    <StyledDiv>
      <Row>
        <Col>
          <TextBlock rows={rows} color={theme.colors.placeholder} />
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default CardPlaceholder;
