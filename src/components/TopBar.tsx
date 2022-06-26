import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from "@mui/icons-material/Home";
import { ButtonGroup, Drawer, List, ListItem, ListItemButton, ListItemText, useScrollTrigger } from "@mui/material";
import Link from "./Link";

function ElevationScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const pages = ["首頁", "合作案例"];

const TopBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <ElevationScroll>
        <AppBar position="static">
          <Container maxWidth="xl" disableGutters>
            <Toolbar disableGutters sx={{ height: "55px" }}>
              <IconButton
                size="large"
                onClick={() => setMenuOpen(!menuOpen)}
                color="inherit"
                sx={{ display: { xs: "flex", md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton size="large">
                <HomeIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 500,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                宅研所實業有限公司
              </Typography>
              <Box sx={{ marginLeft: "auto", display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button key={page} color="inherit" sx={{ fontSize: "16px", display: "block", px: 2 }}>
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box width="250px" onClick={() => setMenuOpen(false)} onKeyDown={() => setMenuOpen(false)}>
          <List>
            {pages.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
export default TopBar;
