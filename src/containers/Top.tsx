<<<
import React, {useState, useEffect} from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import {Typography, Button, Select, InputLabel, FormGroup, Grid, SvgIcon, Card, CardContent} from "@material-ui/core";
import Header from "components/molecules/Header";
import JugyoCard from "components/molecules/JugyoCard";
import RoomMake from "components/molecules/RoomMake";
import ContentWrapper from "components/atoms/ContentWrapper";
import styled from "styled-components";
import { useUniversities } from "hooks/useUniversities";
import { useUser } from "hooks/useUser";
import { useJugyoPosts } from "hooks/useJugyoPosts";
import CompletedTaskSvg from "resources/completed_tasks_vs6q.svg";
import EducationSvg from "resources/education_f8ru.svg";
import QuestionsReSvg from "resources/Questions_re_1fy7.svg";


const TopMessage = styled(Typography)`
  font-weight: bold;
  margin: 30px 0;
`;

const StyledSelect = styled(Select)`
  max-width: 400px;
  min-width: 300px;
`;

const SvgWrapper = styled.div`
  margin-top: 10px;
  svg {
    height: 285px;
    width: 285px;
    @media screen and (max-width: 460px) {
      height: 200px;
      width: 200px;
    }
  }
`;

const StepWrapper = styled.div`
`;

const FromWrapper = styled(FormGroup)`
  margin: 60px 0;
`;

const BoldText = styled(Typography)`
  font-weight: bold;
`;

const JugyoWrapper = styled(Grid)`
  margin: 30px 0;
`;

const StyledText = styled(Typography)({
    color: "red"
});

const Top: React.FC = () => {
    const [university] = useUniversities();
    const [jugyo, setJugyo] = useState(null);
    const history = useHistory();
    const [ jugyos , loading] = useJugyoPosts();
    const toChat = (id: string) => {
        history.push(`/public_room`);
    };
    console.log(jugyos); 
    const params = {user: {
        name: "username",
        last_used_at: "2020-11-10T07:40:56.149Z",
    }};
    const uuid = useUser(params);
    return (
      <>
        <Header />
        <ContentWrapper>
          <TopMessage variant="h5">
            GETTANは匿名で課題の情報共有ができるサービスです
          </TopMessage>
          <FromWrapper>
            <Grid container spacing={5} alignItems="center" direction="column">
              <Grid item xs={12}>
                <InputLabel htmlFor="university">大学名</InputLabel>
                <StyledSelect
                  inputProps={{
                    name: "大学名",
                    id: "university",
                  }}
                ></StyledSelect>
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="day">曜日</InputLabel>
                <StyledSelect
                  inputProps={{
                    name: "曜日",
                    id: "day",
                  }}
                ></StyledSelect>
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="time">時限</InputLabel>
                <StyledSelect
                  inputProps={{
                    name: "時限",
                    id: "time",
                  }}
                ></StyledSelect>
              </Grid>
            </Grid>
          </FromWrapper>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <StepWrapper>
                <CardContent>
                  <BoldText>
                    大学の課題が難しいのに聞く人がいないあなたへ
                  </BoldText>
                  <SvgWrapper>
                    <QuestionsReSvg />
                  </SvgWrapper>
                </CardContent>
              </StepWrapper>
            </Grid>
            <Grid item xs={12} md={4}>
              <StepWrapper>
                <CardContent>
                  <BoldText>
                    同じ授業を取っている人と協力して課題を解こう
                  </BoldText>
                  <SvgWrapper>
                    <CompletedTaskSvg />
                  </SvgWrapper>
                </CardContent>
              </StepWrapper>
            </Grid>
            <Grid item xs={12} md={4}>
              <StepWrapper>
                <CardContent>
                  <BoldText>これで単位はあなたのもの</BoldText>
                  <SvgWrapper>
                    <EducationSvg />
                  </SvgWrapper>
                </CardContent>
              </StepWrapper>
            </Grid>
          </Grid>
          <JugyoWrapper container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <BoldText variant="h6">現在のルーム</BoldText>
            </Grid>
            {!loading ? (
              jugyos.map((v: any, i: any) => (
                <Grid xs={12} sm={6} md={4} item key={i}>
                  <JugyoCard
                    name={v.name}
                    university="名古屋大学"
                    day={v.day}
                    period={v.period}
                    teacherName={v.teacherName}
                    toRoom={toChat}
                    roomUuid={v.roomUuid}
                  />
                </Grid>
              ))
            ) : (
              <p>loading</p>
            )}
          </JugyoWrapper>
        </ContentWrapper>
      </>
    );   
};

export default Top;