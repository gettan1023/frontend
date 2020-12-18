import React, {useEffect, useState, useMemo} from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { Typography, Button, Select, Card } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { useRoom } from "hooks/useRoom";
import ActionCable from "actioncable";
import ChatWindow from "components/molecules/ChatWindow";
import SideBar from "components/molecules/SideBar";
const StyledHello = styled(Typography)({
  // これはテスト用
  color: "red",
});

interface Messages{
  message: string;
  userUuid: string;
  sendAt?: string;
}

interface ChatChannel extends ActionCable.Channel {
  speak(message: String): void;
}


const WebsocketTest: React.FC = () => {
  const userUuid: string = localStorage.getItem("userUuid") as string;
  const location = useLocation().search;
  const roomUuid: string = location?.split("=")[1];
  const [messages, setMessages] = useState<Messages[]>([]);
  const [channel, setChannel] = useState<ChatChannel | null>(null);
  console.log("called");
  console.log(messages);
  const cable = ActionCable.createConsumer(
    `ws://localhost:3000/cable?p=${userUuid}`
  );
  useEffect(() => {
    const chatChannel: ChatChannel = cable.subscriptions.create(
        { channel: "RoomChannel", room_uuid: roomUuid },
        {
          connected() {
            console.log("connected");
          },
          disconnected(){

          },
          received(data: Messages) {
            // とりあえずconsole.logで確認
            console.log(data);
            console.log(messages);
            setMessages([...messages, data]);
          },
          speak(message: string) {
            return this.perform("send_message", { message: message });
          }
        }) as ChatChannel;
    setChannel(chatChannel);
    },[]);
  const postMessage = (sendMessage: string) => {
    channel?.speak(sendMessage);
  };

  return (
    <>
      <StyledHello>Hello World</StyledHello>
      <ChatWindow postMessage={postMessage} presentMessage={messages}/>
    </>
  );
};

export default WebsocketTest;
