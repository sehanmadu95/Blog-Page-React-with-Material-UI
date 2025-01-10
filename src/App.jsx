import {
  Container,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import FeaturedPost from "./components/FeaturedPost";

import PostCard from "./components/PostCard";
import { featuredPosts, sidebar } from "./Data/Data";
import SideBar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header> </Header>

        <FeaturedPost />

        <br />

        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>

        <Grid container spacing={5} sx={{ marginTop: 5 }}>
          <Main title="From the Firehose" />
          <SideBar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
