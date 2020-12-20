import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import styled from 'styled-components';

const Logo = styled(Typography)`
  font-weight: bold;
  padding-left: 20px;
  padding-top: 20px;
  color: #38448B;
`;


 const Header = () => {
  return (
    <>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
    >
        <Logo variant="h4">GETTAN</Logo>
        <Button>部屋を作成する</Button>
      </Grid>
    </>
  );
};

export default Header;