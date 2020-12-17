import React from "react";

import ImageMessage from "components/atoms/ImageMessage";
import TextMessage from "components/atoms/TextMessage";
import InputField from "components/molecules/InputField";
import SideBar from "components/molecules/SideBar";
import styled from 'styled-components';
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
      <div style={styles.body}>
      <div style={styles.leftside}>
      <Typography style={styles.title}>GETTAN</Typography>
      <Typography style={styles.li}>大学名</Typography>
      <Typography style={styles.li}>授業名</Typography>
      <Typography style={styles.li}>曜日・時限</Typography>
      <Typography style={styles.li}>教授名</Typography>
      <div style={styles.footer}>
      <Button style={styles.btn}>

      </Button>
      <Button style={styles.btn}>
      <Typography >退出</Typography>
      </Button>
      </div>
      </div>
      </div>
    );
};

export default PublicRoom;
