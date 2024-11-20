import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const useStyles = styled(theme => ({
  container: {
    padding: theme.spacing(4),
    color: '#000',
  },
  heading: {
    fontFamily: 'serif',
    fontWeight: 400,
    lineHeight: '110.88px',
    textAlign: 'center',
    color: '#000',
  },
  subheading: {
    fontFamily: 'Inter',
    fontSize: '36px',
    fontWeight: 500,
    lineHeight: '43.57px',
    textAlign: 'center',
    marginTop: theme.spacing(2),
    color: '#000',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(4),
    color: '#000',
  },

  sectionContent: {
    marginLeft: theme.spacing(4),
    color: '#000',
  },
  sectionHeading: {
    fontSize: '36px',
    fontWeight: 400,
    lineHeight: '44.24px',
    textAlign: 'left',
    color: '#000',
  },
  sectionParagraph: {
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '46.12px',
    textAlign: 'left',
    marginTop: theme.spacing(2),
    color: '#000',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography
          variant="h1"
          className={classes.heading}
          sx={{
            display: 'flex',
            fontFamily: 'serif',
            color: '#000',
            fontSize: {
              xs: '32px',
              sm: '48px',
              md: '64px',
              lg: '80px',
              xl: '96px',
            },
            fontWeight: 400,
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          ABOUT US
        </Typography>
        <Typography
          variant="h6"
          className={classes.subheading}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            color: '#000',
            fontSize: {
              xs: '18px',
              sm: '23px',
              md: '30px',
              lg: '32px',
              xl: '32px',
            },
            marginTop: '5px',
          }}
        >
Your trusted partner for seamless and secure matrimonial connections.
</Typography>
        <Grid
          container
          className={classes.section}
          sx={{
            paddingInline: {
              xs: '15px',
              sm: '25px',
              md: '35px',
              lg: '60px',
              xl: '80px',
            },
            color: '#000',
            marginTop: '50px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} md={6}>
            <img
              src="images/aboutusimage.jpg"
              alt="About Us"
              sx={{ width: '50%', height: '400px', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={6} className={classes.sectionContent}>
            <Typography
              variant="h4"
              className={classes.sectionHeading}
              sx={{
                color: 'red',
                fontSize: { xs: '24px', sm: '24px', lg: '32px', xl: '42px' },
              }}
            >
              WELCOME TO SAPTHAPADHI
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#000',
                marginTop: '20px',
                fontSize: { xs: '12px', md: '20px' },
              }}
            >
              Best wedding matrimony It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout.
              <br />
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have alteration in some form, by injected humor,
              or randomized words which don't look even slightly believable.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <div className="flex flex-wrap justify-around gap-y-4 mt-10 md:mt-24  lg:mt-24">
        <div className="border-[3px] border-black border-dashed w-[300px] h-[360px] md:h-[500px] lg:h-[500px] rounded-[10px] flex justify-center items-center">
          <img src="images/aboutuspage.jpg" alt="Images 1" />
        </div>
        <div className="border-[3px] border-black border-dashed w-[300px] h-[360px] md:h-[500px] lg:h-[500px] rounded-[10px] flex justify-center items-center">
          <img src="images/aboutUsSecondImagge.jpg" alt="Images 1" />
        </div>
        <div className="border-[3px] border-black border-dashed w-[300px] h-[360px] md:h-[500px] lg:h-[500px] rounded-[10px] flex justify-center items-center">
          <img src="images/aboutusimagefour.jpg" alt="Images 1" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-16 lg:mt-20 ">
        <Typography
          sx={{
            borderRadius: '0px 10px 0 10px',
            display: 'flex',
            justifyContent: 'center',
            marginLeft: { xs: '0px', md: '64px' },
            border: '1px solid black',
            paddingInline: { xs: '20px', md: '0px', lg: '0px' },
            width: { xs: 'auto', sm: '300px', md: '526px' },
            fontSize: { xs: '25px', md: '40px' },
            backgroundColor: '#f9f9f9',
            color: '#000',
          }}
          variant="h4"
          component="div"
        >
          OUR PROFESSIONALS
        </Typography>
      </div>
      <div className="flex flex-wrap gap-3 justify-around px-6 mt-7 md:mt-16 lg:mt-16 pb-16">
      <div className="w-[368px] shadow-2xl p-4 rounded-[10px]">
  <img
    src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
    className="w-[368px] h-[400px] rounded-[5px]"
    alt="Our Profession Images"
  />
  <div className="border-[1px] border-black mx-auto mt-2 text-black rounded-[15px] text-[24px] w-[227px] h-[39px] flex justify-center items-center">
    Jack Daniel
  </div>
  <p className="text-[18px] text-gray-600 text-center mt-2 font-medium">CEO & Founder</p>
  <p className="text-[16px] text-black px-1 mx-auto mt-4 text-center">
    Jack has 10+ years of experience in the tech industry and is passionate about bringing people together through innovation.
  </p>
</div>

<div className="w-[368px] shadow-2xl p-4 rounded-[10px]">
  <img
    src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg"
    className="w-[368px] h-[400px] rounded-[5px]"
    alt="Our Profession Images"
  />
  <div className="border-[1px] border-black mx-auto mt-2 text-black rounded-[15px] text-[24px] w-[227px] h-[39px] flex justify-center items-center">
    Michael Lee
  </div>
  <p className="text-[18px] text-gray-600 text-center mt-2 font-medium">Chief Technology Officer</p>
  <p className="text-[16px] text-black px-1 mx-auto mt-4 text-center">
    Michael oversees the development and innovation of our platform, ensuring a seamless user experience.
  </p>
</div>

<div className="w-[368px] shadow-2xl p-4 rounded-[10px]">
  <img
    src="https://www.shutterstock.com/shutterstock/photos/2122700972/display_1500/stock-photo-image-of-young-asian-woman-company-worker-in-glasses-smiling-and-holding-digital-tablet-standing-2122700972.jpg"
    className="w-[368px] h-[400px] rounded-[5px]"
    alt="Our Profession Images"
  />
  <div className="border-[1px] border-black mx-auto mt-2 text-black rounded-[15px] text-[24px] w-[227px] h-[39px] flex justify-center items-center">
    Sophia Wang
  </div>
  <p className="text-[18px] text-gray-600 text-center mt-2 font-medium">Head of Marketing</p>
  <p className="text-[16px] text-black px-1 mx-auto mt-4 text-center">
    Sophia drives our marketing strategies with creativity and ensures our platform reaches users effectively.
  </p>
</div>

      
      </div>

      <Box sx={{ marginTop: '50px', textAlign: 'center', padding: '20px' }}>
  <Typography
    variant="h4"
    sx={{
      fontSize: {
        xs: '20px',
        sm: '24px',
        md: '28px',
        lg: '32px',
      },
      fontWeight: 500,
      marginBottom: '15px',
      color: 'red',
    }}
  >
    Our Vision
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontSize: {
        xs: '14px',
        sm: '16px',
        md: '18px',
        lg: '20px',
      },
      lineHeight: '1.8',
      color: '#000',
      maxWidth: '800px',
      margin: '0 auto',
    }}
  >
    To be the most trusted and preferred matrimonial platform, bridging 
    traditions and technology to create meaningful and lasting connections.
  </Typography>
</Box>

{/* Our Mission Section */}
<Box sx={{ marginTop: '30px', textAlign: 'center', padding: '20px' }}>
  <Typography
    variant="h4"
    sx={{
      fontSize: {
        xs: '20px',
        sm: '24px',
        md: '28px',
        lg: '32px',
      },
      fontWeight: 500,
      marginBottom: '15px',
      color: 'red',
    }}
  >
    Our Mission
  </Typography>
  <Typography
    variant="body1"
    sx={{
      fontSize: {
        xs: '14px',
        sm: '16px',
        md: '18px',
        lg: '20px',
      },
      lineHeight: '1.8',
      color: '#000',
      maxWidth: '800px',
      margin: '0 auto',
    }}
  >
    To provide a safe, reliable, and user-friendly platform that upholds 
    the values of trust, respect, and transparency, helping individuals and 
    families find their ideal life partners with ease and confidence.
  </Typography>
</Box>

    </>
  );
};

export default About;
