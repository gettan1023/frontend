import React from "react";
import { Button, Card, Typography } from "@material-ui/core";
import styled from "styled-components";

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    margin: "0",
    height: "100vh",
  },
  leftside: {
    background: "#38448B",
    textAlign: "center",
    font: "30px",
    width: "35vh",
    height: "100%",
    color: "white",
  },
  title: {
    margin: "0 0  70px 0",
    padding: "25px 0 0 0",
    fontSize: "20px",
  },
  li: {
    fontSize: "20px",
    padding: "20px",
  },
  footer: {
    padding: "100px 0px 0px 0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  btn: {
    background: "#E77254",
    width: "150px",
    height: "50px",
    margin: "20px auto",
    color: "white",
    fontSize: "18px",
  },
};
const SideBar: React.FC = () => {
    return (
      <>
        <div style={styles.body}>
          <div style={styles.leftside}>
            <Typography style={styles.title}>GETTAN</Typography>
            <Typography style={styles.li}>大学名</Typography>
            <Typography style={styles.li}>授業名</Typography>
            <Typography style={styles.li}>曜日・時限</Typography>
            <Typography style={styles.li}>教授名</Typography>
            <div style={styles.footer}>
              <Button style={styles.btn}>二人部屋に行く</Button>
              <Button style={styles.btn}>退出</Button>
            </div>
          </div>
        </div>
      </>
    );   
};

export default SideBar;