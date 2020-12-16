import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Typography, Button, Select, Card } from "@material-ui/core";
import Header from "components/molecules/Header";
import RoomMake from "components/molecules/RoomMake";
import { styled } from "@material-ui/core/styles";
import { useUser } from "hooks/useUser";
import ChatWindow from "components/molecules/ChatWindow";
const StyledHello = styled(Typography)({
  // これはテスト用
  color: "red",
});

const Top: React.FC = () => {
  const userUuid: string = JSON.stringify(localStorage.getItem("userUuid"));
  const location = useLocation().search;
  const roomUuid: string = location?.split("=")[1];
  return (
    <>
      <Header />
      <RoomMake />
      <StyledHello>Hello World</StyledHello>
      <ChatWindow userUuid={userUuid} roomUuid={roomUuid}/>
    </>
  );
};

export default Top;
