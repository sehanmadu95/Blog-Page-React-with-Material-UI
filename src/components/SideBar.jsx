import { Divider, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";

const SideBar = (props) => {
  return (
    <>
      <Grid item xs={12} md={4}>
        {/* Title and Description */}
        <Paper elevation={0} sx={{ padding: 2, marginBottom: 3 }}>
          <Typography variant="h6" gutterBottom>
            {props.title}
          </Typography>
          <Typography>{props.description}</Typography>
        </Paper>

        {/* Archives Section */}
        <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
          Archives
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        {props.archives.map((archive) => (
          <Link
            display="block"
            variant="body1"
            href={archive.url}
            key={archive.title}
            sx={{ marginBottom: 1 }}
          >
            {archive.title}
          </Link>
        ))}

        {/* Social Section */}
        <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
          Social
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        {props.social.map((network) => (
          <Link display="block" variant="body1" href="#" key={network.title}>
            <Grid
              container
              spacing={1}
              alignItems="center"
              sx={{ marginBottom: 1 }}
            >
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
