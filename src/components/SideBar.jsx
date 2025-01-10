import { Divider, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

const SideBar = (props) => {
  return (
    <>
      <Grid item xs={12} md={4}>
        <Paper elevation={0} sx={{ padding: 2 }}>
          <Typography variant="h6">{props.title}</Typography>
          <Typography>{props.description}</Typography>
        </Paper>

        <Typography variant="h6" gutterBottom>
          {" "}
          Archives
        </Typography>
        <Divider />
        {props.archives.map((archive) => (
          <Link
            display="block"
            variant="body1"
            href={archive.url}
            key={archive.title}
          >
            {archive.title}
          </Link>
        ))}

        <Typography variant="h6" gutterBottom>
          {" "}
          Social
        </Typography>
        <Divider />

        {props.social.map((network) => (
          <Link display="block" variant="body1" href="#" key={network.title}>
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>

              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default SideBar;
