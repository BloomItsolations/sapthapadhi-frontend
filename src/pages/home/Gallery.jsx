import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const PREFIX = "OurGallery";
const classes = {
  root: `${PREFIX}-root`,
  banner: `${PREFIX}-banner`,
  bannerTextContainer: `${PREFIX}-bannerTextContainer`,
  bannerHeading: `${PREFIX}-bannerHeading`,
  bannerParagraph: `${PREFIX}-bannerParagraph`,
  galleryContainer: `${PREFIX}-galleryContainer`,
  galleryItem: `${PREFIX}-galleryItem`,
  image: `${PREFIX}-image`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },
  [`& .${classes.banner}`]: {
    position: "relative",
    width: "100%",
    height: "457px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "30vh",
    },
  },
  [`& .${classes.bannerTextContainer}`]: {
    position: "absolute",
    backgroundColor: "#ef2ddb47",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "end",
    alignItems: "center",
  },
  [`& .${classes.bannerHeading}`]: {
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  [`& .${classes.bannerParagraph}`]: {
    fontSize: "16px",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: "60%",
    marginInline: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
      marginBottom: theme.spacing(0),
    },
  },
  [`& .${classes.galleryContainer}`]: {
    padding: theme.spacing(3),
  },
  [`& .${classes.galleryItem}`]: {
    position: "relative",
  },
  [`& .${classes.image}`]: {
    width: "100%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
  },
}));

const images = [
  "/images/galleryimage.jpg",
  "/images/galleryimagetwo.jpg",
  "/images/galleryimagethree.jpg",
  "/images/galleryimagefour.jpg",
  "/images/galleryimagefifth.jpg",
  "/images/galleryimagesix.jpg",
  "/images/galleryimageseven.jpg",
  "/images/galleryimageeight.jpg",
  "/images/galleryimagenine.jpg",
];

const Gallery = () => {
  return (
    <Root className={classes.root}>
     <div className="flex justify-center">
     <Typography
        sx={{
          borderRadius: "0px 10px 0 10px",
          display: "flex",
          marginTop: "30px",
          marginBottom: "30px",
          justifyContent: "center",
          marginLeft: { xs: "0px", md: "64px" },
          border: "1px solid black",
          width: { xs: "auto", sm: "300px", md: "526px" },
          fontSize: { xs: "25px", md: "40px" },
          backgroundColor: "#f9f9f9",
          color:'primary.main'
        }}
        variant="h4"
        component="div"
      >
        PHOTO GALLERY
      </Typography>
     </div>

      <Box
        className={classes.banner}
        style={{ backgroundImage: "url('/images/galleryimagebanner.jpg')" }}
      >
        <div className={classes.bannerTextContainer}>
          <Typography className={classes.bannerHeading} variant="h2">
            PHOTO GALLERY
          </Typography>
          <Typography className={classes.bannerParagraph} variant="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
        </div>
      </Box>
      <Grid container spacing={3} className={classes.galleryContainer}>
        {images.map((image, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            className={classes.galleryItem}
          >
            <Card>
              <CardContent>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className={classes.image}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default Gallery;
