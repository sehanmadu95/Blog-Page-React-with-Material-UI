import {
  Badge,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import SideDrawer from "./SideDrawe";

export const Header = () => {
  return (
    <div>
      <Toolbar>
        <SideDrawer>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
        </SideDrawer>

        <Typography
          variant="h5"
          sx={{
            flexGrow: 1,
          }}
        >
          Blogging Website
        </Typography>

        <IconButton color="inherit">
          {" "}
          <Badge badgeContent={5} color="secondary">
            {" "}
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar
        sx={{
          fontSize: 20,
          textTransform: "uppercase",
          justifyContent: "center",
        }}
      >
        Express your emotions through words
      </Toolbar>
    </div>
  );
};
