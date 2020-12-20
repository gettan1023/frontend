import React from "react";
import { useHistory } from "react-router-dom";
import { Typography, Button, Select, Card, CardContent, CardActionArea } from "@material-ui/core";
import styled from "styled-components";

interface Props{
    name: string;
    university: string;
    day: string;
    period: string;
    teacherName: string;
    toRoom: (t: string) => void;
    roomUuid: string;
}

const StyledCard = styled(Card)`
  color: #38448B;
  height: 200px;
  width: 320px;
  margin: 0 auto;
`;
const BoldText = styled(Typography)`
  font-weight: bold;
  margin-bottom: 20px;
`;

const InfoWrapper = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const JugyoCard: React.FC<Props> = ({name, day, university, period, teacherName, toRoom, roomUuid}) => {
    console.log("called card");
    return (
      <>
        <StyledCard>
          <CardActionArea onClick={(e) => toRoom(roomUuid)}>
            <CardContent>
              <BoldText variant="h5">{name}</BoldText>
              <InfoWrapper>
                <Typography>大学名：{university}</Typography>
                <Typography>
                  授業日時：{day}曜{period}限
                </Typography>
                <Typography>教員名：{teacherName}</Typography>
              </InfoWrapper>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </>
    );
};

export default JugyoCard;

