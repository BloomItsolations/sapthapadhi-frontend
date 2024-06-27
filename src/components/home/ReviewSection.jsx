import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReviewCard from './ReviewCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PREFIX = 'ReviewSection';
const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  moreButton: `${PREFIX}-moreButton`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
    backgroundColor: '#f5f5f5',

  },
  [`& .${classes.title}`]: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    borderRadius: '0px 10px 0 10px',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid black',
    width: { xs: 'auto', sm: '300px', md: '387px' },
    fontSize: { xs: '25px', md: '40px' },
    backgroundColor: '#f9f9f9',
  },
  [`& .${classes.moreButton}`]: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
}));

const reviews = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    profilePicture: 'https://via.placeholder.com/150',
    name: 'John Doe',
    profession: 'Chef',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    profilePicture: 'https://via.placeholder.com/150',
    name: 'Jane Smith',
    profession: 'Nutritionist',
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    profilePicture: 'https://via.placeholder.com/150',
    name: 'Mark Johnson',
    profession: 'Food Blogger',
  },
];

const ReviewSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Root className={classes.root}>
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
        >
        <Typography
          sx={{
            borderRadius: '0px 10px 0 10px',
            display: 'flex',
            justifyContent: 'center',
            marginInline: 'auto',
            border: '1px solid black',
            width: { xs: 'auto', sm: '300px', md: '526px' },
            fontSize: { xs: '25px', md: '40px' },
            fontFamily: 'Cabin',
            color: '#e5026b',
            textAlign: 'center',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          variant="h4"
          component="div"
        >
          REVIEWS
        </Typography>

          <Grid container spacing={4} sx={{ marginTop: '20px' }}>
            {reviews.map((review, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ReviewCard review={review} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
        <div className={classes.moreButton}>
          <Button variant="contained" color="inherit" href="/more-reviews">
            More...
          </Button>
        </div>
      </Container>
    </Root>
  );
};

export default ReviewSection;
