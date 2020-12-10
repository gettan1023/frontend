import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import styled from 'styled-components';

const Logo = styled(Typography)`

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
        <Typography>GETTAN</Typography>
        <Button>部屋を作成する</Button>
      </Grid>
    </>
  );
};

export default Header;