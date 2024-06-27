// src/components/Header.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const Header = () => {
  const [lookingFor, setLookingFor] = React.useState('');
  const [age, setAge] = React.useState('');
  const [religion, setReligion] = React.useState('');
  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'lookingFor':
        setLookingFor(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'religion':
        setReligion(value);
        break;
      case 'location':
        setLocation(value);
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("images/homepageimage.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(0.5px)',
          zIndex: -1,
        },
        '::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: -1,
        },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '24px', sm: '40px', md: '64px' },
            fontFamily:'Noto Serif',
            mb: 2,
            fontWeight: '600'
          }}
        >
          Find your<br />
          <span style={{ color: 'red' }}>Right Match</span> here
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '16px', sm: '30px', md: '48px' },
            fontFamily:'Cabin',
            mb: 4,
          }}
        >
          “One love, one heart, one destiny.”
        </Typography>


      </Box>
      <Box
          sx={{
            backgroundColor: 'black',
            padding: '20px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            mb: 2,
            width: '100%',
            maxWidth: '1100px',
            marginTop:'30px'
          }}
        >
          <FormControl fullWidth sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
            <InputLabel>Looking For</InputLabel>
            <Select
              name="lookingFor"
              value={lookingFor}
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
            <InputLabel>Age</InputLabel>
            <Select
              name="age"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="18-25">18-25</MenuItem>
              <MenuItem value="26-35">26-35</MenuItem>
              <MenuItem value="36-45">36-45</MenuItem>
              <MenuItem value="46-60">46-60</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
            <InputLabel>Religion</InputLabel>
            <Select
              name="religion"
              value={religion}
              onChange={handleChange}
            >
              <MenuItem value="Christianity">Christianity</MenuItem>
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Hinduism">Hinduism</MenuItem>
              <MenuItem value="Buddhism">Buddhism</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
            <InputLabel>Location</InputLabel>
            <Select
              name="location"
              value={location}
              onChange={handleChange}
            >
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              <MenuItem value="Chicago">Chicago</MenuItem>
              <MenuItem value="Houston">Houston</MenuItem>
            </Select>
          </FormControl>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#607D8B',
                padding: { xs: '0px 20px', sm: '0px 24px' },
                fontSize: { xs: '16px', sm: '18px' },
              }}
            >
              Let's Begin
            </Button>

        </Box>
    </Box>
  );
};

export default Header;
