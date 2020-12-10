import React from "react";
import {Typography, Button, Select, Card} from "@material-ui/core";
import Header from "components/molecules/Header";
import RoomMake from "components/molecules/RoomMake";

const Top: React.FC = () => {
    return(
        <>
            <Header/>
            <RoomMake/>
            <h1>Hello World</h1>
        </>
    );   
};

export default Top;