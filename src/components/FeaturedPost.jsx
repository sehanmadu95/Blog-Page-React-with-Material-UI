import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const FeaturedPost = () => {
  return (
    <Card
      sx={{
        backgroundImage:
          "url(https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundPosition: "center",
        padding: "35px 25px",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 40,
            fontFamily: "Montserrat",
          }}
          gutterBottom
        >
          Title of a longer fatured blog post
        </Typography>

        <Typography variant="h5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima harum
          reiciendis nam, iste ex dolor libero laborum molestiae est culpa
          facere, numquam tempora sunt repellat cupiditate accusamus, cumque
          quidem voluptatum.
        </Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" color="secondary">
          READ MORE...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
