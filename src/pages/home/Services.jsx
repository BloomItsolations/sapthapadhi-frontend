import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const services = [
  {
    id: 1,
    title: 'FUNCTION OR WEDDING HALL',
    description:
      "We provide seamless function and wedding hall bookings, ensuring the perfect venue for all your special events and celebrations.",
    imageUrl: '/images/function.png',
    slug: 'function-or-wedding-hall', // Added slug for URL
  },
  {
    id: 2,
    title: 'THE PHOTOGRAPHY',
    description:
      "Capture your special moments with our professional photography services, ensuring memories that last a lifetime.",
    imageUrl: '/images/photography.png',
    slug: 'photography', // Added slug for URL
  },
  {
    id: 3,
    title: 'DECORATION',
    description:
      "Transform your event with our stunning decoration services, creating unforgettable atmospheres for every occasion.",
    imageUrl: '/images/decoration.png',
    slug: 'decoration', 
  },
  {
    id: 4,
    title: 'CATERING',
    description:
      "Delight your guests with our exceptional catering services, offering a feast of flavors for every celebration.",
    imageUrl: '/images/catering.png',
    slug: 'catering', // Added slug for URL
  },
  {
    id: 5,
    title: 'MUSIC OR ORCHESTRA',
    description:
      "Elevate your event with our enchanting music and orchestra services, creating a memorable soundscape.",
    imageUrl: '/images/musicandorchestra.png',
    slug: 'music-or-orchestra', 
  }
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
  [`& .${classes.title}`]:{
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  [`& .${classes.description}`]: {
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem', 
    },
  },
}));

const Services = () => {
  return (
    <Root className={classes.root}>
    <div className='flex justify-center'>
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
    </div>

      <Grid container spacing={3}>
        {services.map(service => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Link to={`/services/${service.slug}`} style={{ textDecoration: 'none' }}>
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
                      {service.title}
                    </Typography>
                    <Typography
                      className={classes.description}
                      
                      color="inherit"
                    >
                      {service.description}
                    </Typography>
                  </div>
                </div>
                <CardContent className={classes.content} />
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default Services;
