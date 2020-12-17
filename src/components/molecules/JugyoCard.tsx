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

`;

const JugyoCard: React.FC<Props> = ({name, day, university, period, teacherName, toRoom, roomUuid}) => {
    console.log("called card");
    return (
      <>
        <StyledCard>
          <CardActionArea onClick={e => toRoom(roomUuid)}>
            <CardContent>
              <Typography>{name}</Typography>
              <Typography>{university}</Typography>
              <Typography>
                {day}
                {period}
              </Typography>
              <Typography>{teacherName}</Typography>
            </CardContent>
          </CardActionArea>
        </StyledCard>
      </>
    );
};

export default JugyoCard;

