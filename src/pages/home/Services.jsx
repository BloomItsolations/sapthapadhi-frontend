import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const services = [
  {
    id: 1,
    title: 'WEDDING SERVICES',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/images/Rectangle 280.jpg',
  },
  {
    id: 2,
    title: 'THE CEREMONY',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/images/Rectangle 281.jpg',
  },
  {
    id: 3,
    title: 'PHOTOGRAPHY & VIDEO',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/images/Rectangle 282.jpg',
  },
  {
    id: 4,
    title: 'FOOD CATERING',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/images/Rectangle 283.jpg',
  },
  {
    id: 5,
    title: 'DECORATIONS',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/images/Rectangle 284.jpg',
  },
  {
    id: 6,
    title: 'WEDDING HALLS',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/images/Rectangle 285.jpg',
  },
  {
    id: 7,
    title: 'WEDDING REGISTRY',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/images/Rectangle 286.jpg',
  },
  {
    id: 8,
    title: 'THE PERFECT CAKE',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: '/images/Rectangle 287.jpg',
  },
];

const PREFIX = 'OurService';
const classes = {
  root: `${PREFIX}-root`,
  card: `${PREFIX}-card`,
  mediaContainer: `${PREFIX}-mediaContainer`,
  media: `${PREFIX}-media`,
  overlay: `${PREFIX}-overlay`,
  content: `${PREFIX}-content`,
  title: `${PREFIX}-title`,
  description: `${PREFIX}-description`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  [`& .${classes.card}`]: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    '&:hover': {
      boxShadow: theme.shadows[6],
    },
  },
  [`& .${classes.mediaContainer}`]: {
    position: 'relative',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
  },
  [`& .${classes.media}`]: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    zIndex: 0,
  },
  [`& .${classes.overlay}`]: {
    position: 'absolute',
    zIndex: 2,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: theme.palette.common.white,
    width: '100%',
    padding: theme.spacing(2),
  },
  [`& .${classes.content}`]: {
    position: 'relative',
    zIndex: 3,
    padding: theme.spacing(0),
  },
  [`& .${classes.title}`]: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  [`& .${classes.description}`]: {
    fontSize: '1rem',
  },
}));

const Services = () => {
  return (
    <Root className={classes.root}>
      <Typography
        sx={{
          borderRadius: '0px 10px 0 10px',
          display: 'flex',
          marginTop: '30px',
          marginBottom: '30px',
          justifyContent: 'center',
          marginLeft: { xs: '0px', md: '64px' },
          border: '1px solid black',
          width: { xs: 'auto', sm: '300px', md: '526px' },
          fontSize: { xs: '25px', md: '40px' },
          backgroundColor: '#f9f9f9',
          color: 'primary.main',
          textAlign: 'center',
        }}
        variant="h4"
        component="div"
      >
        OUR SERVICES
      </Typography>

      <Grid container spacing={3}>
        {services.map(service => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card className={classes.card}>
              <div className={classes.mediaContainer}>
                <img
                  className={classes.media}
                  src={service.imageUrl}
                  alt={service.title}
                />
                <div className={classes.overlay}>
                  <Typography
                    className={classes.title}
                    variant="h5"
                    component="h2"
                  >
                    WEDDING SERVICES
                  </Typography>
                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="inherit"
                  >
                    {service.description}
                  </Typography>
                </div>
              </div>
              <CardContent className={classes.content}>
                {/* Additional content if needed */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default Services;
