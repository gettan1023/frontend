import React from "react";
import {Typography, Button, Select, Card} from "@material-ui/core";
import Header from "components/molecules/Header";
import RoomMake from "components/molecules/RoomMake";
import { styled } from "@material-ui/core/styles";

const StyledHello = styled(Typography)({
    // これはテスト用
    color: 'red'
})

const Top: React.FC = () => {
    return(
        <>
            <Header/>
            <RoomMake/>
            <StyledHello>Hello World</StyledHello>
        </>
    );   
};

export default Top;