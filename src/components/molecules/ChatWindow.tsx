import React, { useState, useEffect } from 'react';
import { useRoom } from "hooks/useRoom";
import { Button, TextField } from "@material-ui/core";
import ImageMessage from "components/atoms/ImageMessage";
import TextMessage from "components/atoms/TextMessage";

interface Props{
    postMessage: (m: string) => void;
    presentMessage: any;
};


const ChatWindow: React.FC<Props> = ({postMessage, presentMessage}) => {
    const [textValue, changeTextValue] = useState<string>("");
    return (
      <>
        <p>こんにちは</p>
        {presentMessage?.map((v: any, i:any) => (
          <p key={i}>{v.message}</p>
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