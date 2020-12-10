import React from "react";
import {Typography, Button, Select, Card} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import Header from "components/molecules/Header";
import RoomMake from "components/molecules/RoomMake";

const StyledText = styled(Typography)({
    color: "red"
});

const Top: React.FC = () => {
    return(
        <>
            <Header/>
            <RoomMake/>
            <StyledText>Hello World</StyledText>
        </>
    );   
};

export default Top;