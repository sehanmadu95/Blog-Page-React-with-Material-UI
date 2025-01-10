import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent>
            <Typography gutterBottom>{post.title}</Typography>
            <Typography gutterBottom>{post.date}</Typography>
            <Typography gutterBottom sx={{ flex: 1 }}>
              {post.description}
            </Typography>
            <Typography color="primary">Continue Reading...</Typography>
          </CardContent>

          <Hidden xsDown>
            <CardMedia
              image={post.image}
              tittle={post.imageTitle}
              sx={{
                width: 160,
                display: { xs: "none", sm: "block" }, // Hide on xs and show on sm and up
              }}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
