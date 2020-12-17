import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import {Typography, Button, Select, Card} from "@material-ui/core";
import Header from "components/molecules/Header";
import JugyoCard from "components/molecules/JugyoCard";
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
    const [university] = useUniversities();
    const history = useHistory();
    const [ jugyos ] = useJugyoPosts();
    const toChat = (id: string) => {
        history.push(`/test?p=${id}`);
    };
    console.log(jugyos); 
    const params = {user: {
        name: "username",
        last_used_at: "2020-11-10T07:40:56.149Z",
    }};
    const uuid = useUser(params);
    return(
        <>
            <Header/>
            <StyledHello>Hello World</StyledHello>
            <Button onClick={e => toChat(jugyos[0].roomUuid)}>テスト画面に行く</Button>
            { jugyos ? (jugyos.map((v: any, i:any) => {
              <JugyoCard 
              key={i}
              name={v.name}
              university="名古屋大学"
              day={v.day}
              period={v.period}
              teacherName={v.teacherName}
              toRoom={toChat}
              roomUuid={v.roomUuid}
              />
            })) : null
          }
        </>
    );   
};

export default Top;