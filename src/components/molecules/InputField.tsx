import React from "react";
import { TextField } from '@material-ui/core';
import { Send, PhotoSizeSelectActual } from '@material-ui/icons';

const InputField: React.FC = () => {
    return (
      <>
        <TextField></TextField>
        <Send />
        <PhotoSizeSelectActual />
      </>
    );   
};

export default InputField;