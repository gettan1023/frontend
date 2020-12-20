import React from "react";
import { styled } from "@material-ui/core/styles";
import ImageMessage from "components/atoms/ImageMessage";
import TextMessage from "components/atoms/TextMessage";
import InputField from "components/molecules/InputField";
import SideBar from "components/molecules/SideBar";
import {Typography, Button, Select, Card} from "@material-ui/core";

const styles: {[key: string]: React.CSSProperties} = {
  body:{
    margin:'0',
    height:'100%',

  },
    leftside:{
    background:'#38448B',
    textAlign:'center',
    font:'30px',
    width:'200px',
    height:'100%',
    color:'white',

  },
  title: {
    margin:'0 0  70px 0',
    padding:'25px 0 0 0',
    fontSize:'20px',
  },
  li:{
    fontSize:'20px',
		padding:'20px',
  },
  footer: {
    padding: '100px 0px 0px 0px',

  },
  btn: {
    background: '#E77254',
    flex: 1,
    width:'120px',
		height:'25px',
		margin:'20px auto',
    color:'white',
    fontSize:'20px',
  }
};

const PublicRoom: React.FC = () => {
    return(
        <>
            <SideBar></SideBar>
            <InputField></InputField>
        </>
    );   
};

export default PublicRoom;
