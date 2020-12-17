import React, { useState, useEffect } from 'react';
import { useRoom } from "hooks/useRoom";
import { Button, TextField } from "@material-ui/core";
import ImageMessage from "components/atoms/ImageMessage";
import TextMessage from "components/atoms/TextMessage";

interface Props{
    postMessage: (m: string) => void;
    roomUuid: string;
};


const ChatWindow: React.FC<Props> = ({postMessage, roomUuid}) => {
    const [messages, setMessages] = useState<string[]>([]);
    const [textValue, changeTextValue] = useState<string>("");
    const [msg, error] = useRoom(roomUuid);
    useEffect(() => {
        setMessages(msg);
    }, []);
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