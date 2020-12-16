import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import {Typography, Button, Select, Card} from "@material-ui/core";
import Header from "components/molecules/Header";
import RoomMake from "components/molecules/RoomMake";
import { styled } from "@material-ui/core/styles";
import { useUniversities } from "hooks/useUniversities";
import { useUser } from "hooks/useUser";
import { useJugyoPosts } from "hooks/useJugyoPosts";

const StyledHello = styled(Typography)({
    // これはテスト用
    color: 'red'
})

const Top: React.FC = () => {
    const [university, error] = useUniversities();
    const [ jugyos ] = useJugyoPosts();
    console.log(jugyos); 
    // const uuid = useUser({
    //   user: {
    //     name: "username",
    //     last_used_at: "2020-11-10T07:40:56.149Z",
    //   },
    // });
    return(
        <>
            <Header/>
            <RoomMake/>
            <StyledHello>Hello World</StyledHello>

            
        </>
    );   
};

export default Top;