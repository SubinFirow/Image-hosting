import { useEffect } from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";

const Gallery = () => {
  const fetchImages = useSelector(state => state.image.image) 
  useEffect(() => {
    // call api to get the image data
  }, []);

  return (
    <Grid container spacing={2}>
      {fetchImages.map((image, i) => (
        <Grid item xs={12} sm={6} md={4} key={i}>
          <Card>
            <CardMedia component="img" image={image} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
