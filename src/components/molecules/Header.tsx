import React from "react";
import { AppBar, Toolbar, Typography, useScrollTrigger, Slide } from "@material-ui/core";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

 const Header = (props: Props) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">GETTAN</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Header;