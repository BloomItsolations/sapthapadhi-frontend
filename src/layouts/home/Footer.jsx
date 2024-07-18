import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
  Button,
} from '@mui/material';
import Logo from '../../components/logo';
import { FaGooglePlay } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';

const Footer = () => {
  const cYear = new Date().getFullYear();

  const footerNavs = [
    {
      label: 'Company',
      items: [
        {
          to: '/terms_and_conditions',
          name: 'Terms & Conditions',
        },
        {
          to: '/privacy_and_policy',
          name: 'Privacy & Policy',
        },
        {
          to: '/',
          name: 'Contact Us',
        },
      ],
    },
  ];

  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', py: 5, px: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="">
          <Grid item xs={12} sm={6} md={3}>
            <Logo />

            <Typography variant="body2">
              sapthapadhi excels in direct selling with top-notch products, and
              online services.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {footerNavs.map((item, idx) => (
              <Box key={idx}>
                <Typography variant="h5">{item.label}</Typography>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {item.items.map((el, idx) => (
                    <li key={idx}>
                      <Link
                        component={RouterLink}
                        to={el.to}
                        sx={{
                          color: '#fff',
                          fontSize: 15,
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                            color: '#fff',
                          },
                        }}
                      >
                        {el.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: 'flex',
                justifyItems: 'start',
                alignItems: 'start',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography variant="h5">Contact Us</Typography>

              <Typography
                component="a"
                href="mailto:support@mywelthhelpsolution.in"
                sx={{ cursor: 'pointer' }}
              >
                support@mywelthhelpsolution.in
              </Typography>
              <Typography
                component="a"
                href="https://api.whatsapp.com/send/?phone=917892222108&text&type=phone_number&app_absent=0"
                sx={{ cursor: 'pointer' }}
              >
                +91 7892222108
              </Typography>
            </Box>
            <Box sx={{ cursor: 'pointer' }}>
              <IconButton
                href="https://www.instagram.com"
                sx={{ color: 'black', mr: 1 }}
              >
                <FaInstagram size={20} />
              </IconButton>
              <IconButton
                href="https://www.facebook.com"
                sx={{ color: 'black', mr: 1 }}
              >
                <CiFacebook size={22} />
              </IconButton>
              <IconButton
                href="https://www.youtube.com"
                sx={{ color: 'black' }}
              >
                <AiOutlineYoutube size={23} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                maxWidth: 345,
                paddingX: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                justifyContent: 'Start',
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
                <AiFillAndroid size="40" style={{ marginRight: '10px' }} />
                <Typography gutterBottom variant="h5" component="div">
                  Get Our App
                </Typography>
              </Box>
              <Button
                size="large"
                fullWidth
                sx={{
                  backgroundColor: '#fff',
                  '&:hover, &:focus': {
                    backgroundColor: '#fff',
                  },
                }}
                startIcon={<FaGooglePlay />}
                href="https://play.google.com/store/apps/details?id=com.mywelthhelpsolution.mywelthhelpsolution"
              >
                Play Store
              </Button>
              <Button
                size="large"
                startIcon={<AiFillAndroid />}
                fullWidth
                sx={{
                  backgroundColor: '#fff',
                  '&:hover, &:focus': {
                    backgroundColor: '#fff',
                  },
                }}
                href="/assets/apk/mywelthhelpsolution.apk"
                download
              >
                APK Download
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#fff' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 1,
          }}
        >
          <Typography>
            &copy; {cYear} sapthapadhi. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
