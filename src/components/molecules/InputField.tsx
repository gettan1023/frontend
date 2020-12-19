import React from "react";
import { TextField, Grid } from '@material-ui/core';
import { Send, PhotoSizeSelectActual } from '@material-ui/icons';
import styled from "styled-components";

const InputWrapper = styled.div`
  padding: 0;
  margin: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 120vh;
`;

const StyledGrid = styled(Grid)`
  margin-bottom: 20px;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
`;

const InputField: React.FC = () => {
    return (
      <>
        <InputWrapper>
          <StyledGrid container spacing={3} alignItems="center" justify="flex-start">
            <Grid xs={10}>
              <StyledTextField placeholder="メッセージを入力してください"></StyledTextField>
            </Grid>
            <Grid xs={1}>
              <Send />
              </Grid>
              <Grid xs ={1}>
              <PhotoSizeSelectActual />
            </Grid>
          </StyledGrid>
        </InputWrapper>
      </>
    );   
};

export default InputField;