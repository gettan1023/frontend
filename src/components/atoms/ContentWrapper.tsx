import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled(Box)`
  maxwidth: "1080px";
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  margin-bottom: 30px;
  @media screen and (max-width: 1072px) {
    max-width: 800px;
  }
  @media screen and (max-width: 736px) {
    max-width: 300px;
  }
`;

const ContentWrapper: React.FC = ({children}) => {
    return (
        <Wrapper>
          {children}
        </Wrapper>
    )
};

export default ContentWrapper