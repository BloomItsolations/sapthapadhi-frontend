// src/components/ReviewCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const PREFIX = 'ReviewCard';
const classes = {
  card: `${PREFIX}-card`,
  stars: `${PREFIX}-stars`,
  profile: `${PREFIX}-profile`,
  avatar: `${PREFIX}-avatar`,
  name: `${PREFIX}-name`,
  profession: `${PREFIX}-profession`,
};

const Root = styled(Card)(({ theme }) => ({
  [`&.${classes.card}`]: {
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  [`& .${classes.stars}`]: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  },
  [`& .${classes.profile}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  [`& .${classes.avatar}`]: {
    marginBottom: theme.spacing(1),
  },
  [`& .${classes.name}`]: {
    fontWeight: 'bold',
  },
  [`& .${classes.profession}`]: {
    color: theme.palette.text.secondary,
  },
}));

const ReviewCard = ({ review }) => {
  return (
    <Root className={classes.card}>
      <CardContent>
        <Box className={classes.stars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} style={{ color: 'gold', fontSize: '40px' }} />
          ))}
        </Box>
        <Typography variant="body1" gutterBottom sx={{fontSize:'16px'}}>
          {review.text}
        </Typography>
        <Box className={classes.profile}>
          <Avatar src={review.profilePicture} className={classes.avatar} sx={{width:'78px',height:'78px'}} />
          <Typography className={classes.name}>{review.name}</Typography>
          <Typography className={classes.profession}>{review.profession}</Typography>
        </Box>
      </CardContent>
    </Root>
  );
};

export default ReviewCard;
