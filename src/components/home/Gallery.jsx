import React from 'react';
import { Container, Grid, Card, CardMedia, CardActionArea, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const PREFIX = 'Gallery';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  media: `${PREFIX}-media`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
    backgroundColor: '#f5f5f5'
  },
  [`& .${classes.card}`]: {
    margin: theme.spacing(2),
    overflow: 'hidden',
    '&:hover': {
      '& $media': {
        transform: 'scale(1.1)',
      },
    },
  },
  [`& .${classes.media}`]: {
    height: 200,
    transition: 'transform 0.3s ease',
  },
}));

const images = [
  'images/galleryone.jpg',
  'images/gallerytwo.jpg',
  'images/gallerythree.jpg',
  'images/galleryfour.jpg',
  'images/galleryfifth.jpg',
  'images/gallerysix.jpg',
];

const Gallery = () => {
  return (
    <Root className={classes.root}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Typography
          sx={{
            borderRadius: '0px 10px 0 10px',
            border: '1px solid #ccc',
            padding: '10px 20px',
            fontSize: { xs: '25px', md: '40px' },
            backgroundColor: '#007bff',
            color: 'white',
            fontFamily: 'Cabin',
            textAlign: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          variant="h4"
          component="div"
        >
          GALLERY
        </Typography>
      </Box>

      <Container>
        <Grid container spacing={4} sx={{ marginTop: '25px', }}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title={`Image ${index + 1}`}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default Gallery;
