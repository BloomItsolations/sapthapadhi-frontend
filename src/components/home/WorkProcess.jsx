import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WorkProcess = () => {

  const cardData = [
    {
      type: 'image',
      content: 'images/workprocessimage.jpg',
    },
    {
      type: 'text',
      title: 'REGISTER',
      content:
        "Fill in your details, upload your photos, and set your preferences to discover compatible matches. Join now and take the first step towards finding your soulmate",
    },
    {
      type: 'text',
      title: 'FIND YOUR MATCH',
      content:
        "Our advanced matching algorithm ensures you connect with individuals who share your values and aspirations. Begin your search today and discover meaningful connections that could lead to a lifelong partnership.",
    },
    {
      type: 'image',
      content: 'images/workprocessimagettwo.jpg',
    },
    {
      type: 'image',
      content: 'images/workprocessimagethree.jpg',
    },
    {
      type: 'text',
      title: 'SEND INTEREST',
      content:
        "Show your interest in potential matches with a simple click. Sending an interest is a subtle yet meaningful way to express your curiosity and openness to exploring a deeper connection.",
    },
    {
      type: 'text',
      title: 'GET PROFILE INFORMATION',
      content:
        "Understanding each profile helps you make informed decisions and discover compatibility effortlessly. Unlock the details that matter and connect with profiles that resonate with your preferences.",
    },
    {
      type: 'image',
      content: 'images/workprocessimagefour.jpg',
    },
    {
      type: 'image',
      content: 'images/workprocessimagefifth.jpg',
    },
    {
      type: 'text',
      title: 'START MEETUPS',
      content:
        "Initiate meaningful connections with potential matches through engaging meetups. Take the next step towards building relationships by arranging meetings that allow you to get to know each other better.",
    },
    {
      type: 'text',
      title: 'GETTING MARRIAGE',
      content:
        "Celebrate the joy of finding your perfect match as you embark on the journey towards marriage. Explore the next chapter of your life with confidence.",
    },
    {
      type: 'image',
      content: 'images/workprocesssix.jpg',
    },
  ];

  return (
    <>
      <div className=' bg-[#f5f5f5] pt-7'>
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
          HOW IT WORKS
        </Typography>
        <Box sx={{ padding: 2, position: 'relative', minHeight: '400px', backgroundColor: '#f5f5f5', paddingTop: '70px' }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '4px',
              bgcolor: 'black',
              transform: 'translateX(-50%)',
            }}
          />
          <Grid container spacing={0} >
            {cardData.map((card, index) => (
              <Grid item xs={12} sm={6} key={index} sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                      position: 'relative',
                    }}
                  >
                    <Card
                      sx={{
                        width: { xs: '100%', sm: `${card.type === 'image' ? '260px' : '500px'}` },
                        borderRadius: '0px 10px 0 10px',
                        color: '#e5026b',
                        border: `1px ${card.type === 'image' ? 'none' : 'dashed'} black`,
                        margin: '10px',
                        textAlign: 'left',
                        transform: index % 2 === 0 ? 'translateX(-5%)' : 'translateX(5%)',
                        marginTop: `${card.type !== 'image' ? '20px' : '0px'}`,
                      }}
                    >
                      <CardContent>
                        {card.type === 'image' ? (
                          <Box
                            component="img"
                            sx={{
                              width: '100%',
                              height: 'auto',
                              fontFamily: 'Cabin',
                              border: '0px',
                              maxHeight: '300px',
                              objectFit: 'cover',
                            }}
                            alt="Work Process Image"
                            src={card.content}
                          />
                        ) : (
                          <>
                            <Typography variant="h5" component="div" gutterBottom sx={{ color: '#e5026b', fontFamily: 'Poppins', fontSize:'16px',fontWeight:'700' }}>
                              {card.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 2, fontSize: '18px', fontFamily: 'Poppins'}}>
                              {card.content}
                            </Typography>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default WorkProcess;
