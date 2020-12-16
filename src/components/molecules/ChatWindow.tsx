import React, { useState, useEffect } from 'react';
import ActionCable from "actioncable";
import { useRoom } from "hooks/useRoom";
import { Button, TextField } from "@material-ui/core";


interface Props{
    userUuid: string;
    roomUuid: string;
};

interface ChatChannel extends ActionCable.Channel {
  speak(message: String): void;
}

const ChatWindow: React.FC<Props> = ({userUuid, roomUuid}) => {
    const cable = ActionCable.createConsumer(`ws://localhost:3000/cable?p=${userUuid}`);
    const [messages, setMessages] = useState<string[]>([]);
    const [textValue, changeTextValue] = useState<string>("");
    const [msg, error] = useRoom(roomUuid);

    useEffect(() => {
        setMessages(msg);
    }, []);
    const Channel = cable.subscriptions.create(roomUuid,{
        connected(){
            console.log("connected");
        },
        received(data: any){
            // とりあえずconsole.logで確認
            console.log(data);
        },
        speak(message: string){
            console.log(message);
            return this.perform("send_message", { message: message });
        }
    }) as ChatChannel;
    const postMessage = (sendMessage: string) => {
      Channel.speak(sendMessage);
    };
    const  updateMessage = (receivedMessage: string) => {
        setMessages([...messages, receivedMessage]);
        console.log(messages);
    };
    return (
      <>
        <p>こんにちは</p>
        {messages?.map((v: any) => (
          <p>{v}</p>
        ))}
        <div>
          <TextField
            label="Send a chat"
            value={textValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              changeTextValue(e.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              postMessage(textValue);
              changeTextValue("");
            }}
          >
            Send
          </Button>
        </div>
      </>
    );
};

export default ChatWindow;