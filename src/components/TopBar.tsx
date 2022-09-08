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
import { useRouter } from "next/router";

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

// console.log(router);

const TopBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const router = useRouter();
  const goRoute = (page: string) => {
    if (page === "首頁") router.push("./");
    else if (page === "合作案例") router.push("./cooperate");
  };

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
                  <Button
                    key={page}
                    color="inherit"
                    sx={{ fontSize: "16px", display: "block", px: 2 }}
                    onClick={() => goRoute(page)}
                  >
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
            {pages.map((page, index) => (
              <ListItem key={page} disablePadding>
                <ListItemButton component="a" href="#simple-list" onClick={() => goRoute(page)}>
                  <ListItemText primary={page} />
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
