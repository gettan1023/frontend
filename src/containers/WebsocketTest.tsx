import React from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Typography, Button, Select, Card } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import ActionCable from "actioncable";
import ChatWindow from "components/molecules/ChatWindow";
import SideBar from "components/molecules/SideBar";
const StyledHello = styled(Typography)({
  // これはテスト用
  color: "red",
});

interface ChatChannel extends ActionCable.Channel {
  speak(message: String): void;
}

const Top: React.FC = () => {
  const userUuid: string = localStorage.getItem("userUuid") as string;
  const location = useLocation().search;
  const roomUuid: string = location?.split("=")[1];
  const cable = ActionCable.createConsumer(
    `ws://localhost:3000/cable?p=${userUuid}`
  );
  console.log(`ws://localhost:3000/cable?p=${userUuid}`);
  const chatChannel = cable.subscriptions.create(
    { channel: "RoomChannel", room_uuid: roomUuid },
    {
      connected() {
        console.log("connected");
      },
      received(data: any) {
        // とりあえずconsole.logで確認
        console.log(data);
      },
      speak(message: string) {
        console.log(message);
        return this.perform("send_message", { message: message });
      },
    }
  ) as ChatChannel;
  const postMessage = (sendMessage: string) => {
    chatChannel.speak(sendMessage);
  };
  
  console.log(userUuid);
  console.log(roomUuid)
  return (
    <>
      <StyledHello>Hello World</StyledHello>
      <ChatWindow postMessage={postMessage} roomUuid={roomUuid}/>
    </>
  );
};

export default Top;
