import React from "react";
import { TextBlock } from "react-placeholder/lib/placeholders";
import styled, { useTheme, ThemeContext } from "styled-components";

const StyledDiv = styled.div`
  margin: 15px 0px;
`;

const TextBlockPlaceholder = ({ rows = 1 }) => {

  const theme = useTheme(ThemeContext);

  return (
    <StyledDiv>
          <TextBlock rows={rows} showAnimation color={theme.colors.placeholder} />
    </StyledDiv>
  );
};

export default TextBlockPlaceholder;
