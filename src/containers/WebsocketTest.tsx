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
  const [msg, loading] = useRoom(roomUuid);
  const [messages, setMessages] = useState<Messages[]>(msg);
  const preMessage = useMemo(() => msg, [msg]);
  console.log("called");
  useEffect(() => {
      setMessages(preMessage);
  },[loading]);
  const cable = ActionCable.createConsumer(
    `ws://localhost:3000/cable?p=${userUuid}`
  );
  const chatChannel: ChatChannel = useMemo(() => 
    cable.subscriptions.create(
      { channel: "RoomChannel", room_uuid: roomUuid },
      {
        connected() {
          console.log("connected");
        },
        received(data: Messages) {
          // とりあえずconsole.logで確認
          console.log(data);
          console.log(messages);
          const prevMsg = messages;
          setMessages([...prevMsg, data])
        },
        speak(message: string) {
          return this.perform("send_message", { message: message });
        }
      }) as ChatChannel, [roomUuid]);

  const postMessage = (sendMessage: string) => {
    chatChannel?.speak(sendMessage);
  };

  return (
    <>
      <StyledHello>Hello World</StyledHello>
      <ChatWindow postMessage={postMessage} presentMessage={messages}/>
    </>
  );
};

export default WebsocketTest;
