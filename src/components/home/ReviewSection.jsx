import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Button, TextField, Rating, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReviewCard from './ReviewCard';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
// import swal from 'sweet/alert';
import RestApi from '../../api/RestApi';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

const PREFIX = 'ReviewSection';
const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  moreButton: `${PREFIX}-moreButton`,
  inputBox: `${PREFIX}-inputBox`,
  ratingBox: `${PREFIX}-ratingBox`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
    backgroundColor: '#f5f5f5',
  },
  // Add other styles as needed
}));

const ReviewSection = () => {
  let mydata = JSON.parse(localStorage.getItem('userdata'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [reviewText, setReviewText] = useState('');
  const [starRating, setStarRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const { authInfo } = useSelector((state) => state.auth);
 const [reviewRefeach,setReviewRefeach]=useState(false);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await RestApi.get(`/admin/list-reviews`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [reviewRefeach]);

  const handleReviewSubmit = async () => {
    try {
      let response = await RestApi.post(`/app/addReview`, {
        reviewText,
        reviewerRole: '',
        starRating: starRating
      },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authInfo?.token}`
          }
        }
      )
      if (response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: response?.data?.message,
        });
      }
      setReviewText('');
      setStarRating(0);
      setReviewRefeach(!reviewRefeach);
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Sorry! ...',
          text: "Something went wrong",
        });
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Sorry! ...',
          text: "Something went wrong",
        });
      }
    }
  }

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


          <Box
            // ref={ref}
            sx={{
              maxWidth: { xs: '98%', md: '100%' },
              paddingInline: { xs: '10px', sm: '15px', md: '25px' },
              overflow: 'hidden',
              marginInline: 'auto',
              marginTop:'20px',
              '.slick-prev:before, .slick-next:before': {
                color: 'black',
              },
              '.slick-prev, .slick-next': {
                zIndex: 1,
              },
            }}
          >
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={variants}
            >
              <Slider {...settings}>
                {reviews.map((review, index) => (
                  <ReviewCard review={review} />
                ))}
              </Slider>
            </motion.div>
          </Box>

          {
            authInfo && <div className='w-[96%] mx-auto'>
              <TextField
                id="review-text"
                label="Write your review"
                variant="outlined"
                fullWidth
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                multiline
                rows={4}
                sx={{ marginBottom: '10px',backgroundColor:'white',border:'black 2px',borderRadius:'10px' }}
              />
              {/* Star rating input */}
              <div className={classes.ratingBox}>
                <Typography variant="subtitle1" sx={{ marginBottom: '10px',color:'black' }}>Rating:</Typography>
                <Rating
                  name="star-rating"
                  value={starRating}
                  onChange={(event, newValue) => {
                    setStarRating(newValue);
                  }}
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleReviewSubmit}
                sx={{ marginTop: '10px' }}
              >
                Submit Review
              </Button>
            </div>
          }

        </motion.div>
      </Container>
    </Root>
  );
};

export default ReviewSection;
