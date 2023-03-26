import { useEffect } from "react";
import { Grid, Card, CardMedia } from "@mui/material";

const Gallery = () => {
  useEffect(() => {
    // call api to get the image data
  }, []);

  const images = [
    { src: "https://source.unsplash.com/random/400x400?nature" },
    { src: "https://source.unsplash.com/random/400x400?dark" },
    { src: "https://source.unsplash.com/random/400x400?minimal" },
    { src: "https://source.unsplash.com/random/400x400?water" },
    { src: "https://source.unsplash.com/random/400x400?car" },
    { src: "https://source.unsplash.com/random/400x400?waterfall" },
    { src: "https://source.unsplash.com/random/400x400?mountain" },
    { src: "https://source.unsplash.com/random/400x400?tree" },
    { src: "https://source.unsplash.com/random/400x400?flower" },
    { src: "https://source.unsplash.com/random/400x400?sky" },
    { src: "https://source.unsplash.com/random/400x400?flight" },
    { src: "https://source.unsplash.com/random/400x400?book" },
    { src: "https://source.unsplash.com/random/400x400?forest" },
    { src: "https://source.unsplash.com/random/400x400?pink" },
    { src: "https://source.unsplash.com/random/400x400?firework" },
    { src: "https://source.unsplash.com/random/400x400?beach" },
    { src: "https://source.unsplash.com/random/400x400?bird" },
    { src: "https://source.unsplash.com/random/400x400?clock" },
  ];

  return (
    <Grid container spacing={2}>
      {images.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image.src}>
          <Card>
            <CardMedia component="img" image={image.src} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
