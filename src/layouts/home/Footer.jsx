import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaInstagram, FaGooglePlay } from 'react-icons/fa';
import { AiOutlineYoutube, AiFillAndroid } from 'react-icons/ai';
import { CiFacebook } from 'react-icons/ci';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
  IconButton,
} from '@mui/material';
import Logo from '../../components/logo';

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
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo and About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Logo />
              <Typography
                variant="body2"
                sx={{ mt: 2, lineHeight: 1.6, fontSize: '14px' }}
              >
                Best wedding matrimony. It is a long established fact that a
                reader will be distracted by the readable content of a page when
                looking at its layout.
              </Typography>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={6} md={3}>
            {footerNavs.map((item, idx) => (
              <Box key={idx}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    fontSize: '16px',
                  }}
                >
                  {item.label}
                </Typography>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {item.items.map((el, idx) => (
                    <li key={idx}>
                      <Link
                        component={RouterLink}
                        to={el.to}
                        sx={{
                          color: '#fff',
                          fontSize: '14px',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                          display: 'block',
                          mb: 1,
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

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '16px',
              }}
            >
              Contact Us
            </Typography>
            <Box>
              <Typography
                component="a"
                href="mailto:support@sapthapadhi.in"
                sx={{
                  fontSize: '14px',
                  color: '#fff',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  display: 'block',
                  mb: 1,
                }}
              >
                support@sapthapadhi.in
              </Typography>
              <Typography
                component="a"
                href="https://api.whatsapp.com/send/?phone=917892222108&text&type=phone_number&app_absent=0"
                sx={{
                  fontSize: '14px',
                  color: '#fff',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                +91 7892222108
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <IconButton
                href="https://www.instagram.com"
                sx={{ color: '#fff', mr: 1 }}
              >
                <FaInstagram size={20} />
              </IconButton>
              <IconButton
                href="https://www.facebook.com"
                sx={{ color: '#fff', mr: 1 }}
              >
                <CiFacebook size={22} />
              </IconButton>
              <IconButton
                href="https://www.youtube.com"
                sx={{ color: '#fff' }}
              >
                <AiOutlineYoutube size={23} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#fff' }} />

        {/* Footer Bottom */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Typography sx={{ fontSize: '14px' }}>
            &copy; {cYear} Sapthapadhi. All rights reserved.
          </Typography>
        
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
