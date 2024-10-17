import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import RestApi from '../../api/RestApi';
import Swal from 'sweetalert2';

const Preferences = () => {
  const { authInfo } = useSelector((state) => state.auth);

  const [formValues, setFormValues] = useState({
    minAge: '',
    maxAge: '',
    minHeight: '',
    maxHeight: '',
    maritalStatus: '',
    motherTongue: '',
    physicalStatus: '',
    eatingHabits: '',
    drinkingHabits: '',
    smokingHabits: '',
    religion: '',
    caste: '',
    subcaste: '',
    haveDosh: '',
    star: '',
    education: '',
    occupation: '',
    annualIncome: '',
  }); 
  console.log("FormValue",formValues);

  const [errors, setErrors] = useState({});

  // Define options for all fields
  const options = {
    maritalStatus: ['Single', 'Divorced', 'Widowed', 'Married', 'Separated'],
    eatingHabits: ['Vegetarian', 'Non-Vegetarian', 'Vegan', 'Flexitarian', 'Halal', 'Junk Food', 'A Little of Everything'],
    drinkingHabits: ['Non-Drinker', 'Social Drinker', 'Regular Drinker'],
    smokingHabits: ['Non-Smoker', 'Occasional Smoker', 'Regular Smoker'],
    religion: ['Hinduism', 'Sikhism', 'Christianity', 'Jainism', 'Islam', 'Judaism', 'Buddhism', 'Shinto', 'Confucianism', 'Zoroastrianism', 'Others'],
    physicalStatus: ['Healthy', 'Physically Challenged'],
    education: ['High School', 'Undergraduate', 'Postgraduate', 'Doctorate'],
    occupation: ['Software Engineer', 'Doctor', 'Teacher', 'Engineer', 'Nurse', 'Accountant', 'Manager', 'Artist', 'Writer', 'Business Owner', 'Unemployed', 'Others'],
    // Caste and subcaste options
    caste: [
      'Brahmin', 'Kshatriya', 'Vaishya', 'Shudra',
      'Scheduled Castes', 'Scheduled Tribes', 'Other Backward Classes',
      'Iyer', 'Iyengar', 'Rajput', 'Maratha', 'Bania', 'Yadav',
      'Dalit', 'Santhal', 'Gond', 'Others'
    ],
    motherTongue:['Other','Hindi',
      'Bengali',
      'Telugu',
      'Marathi',
      'Tamil',
      'Urdu',
      'Gujarati',
      'Malayalam',
      'Kannada',
      'Odia',
      'Punjabi',
      'Assamese',
      'Maithili',
      'Santali',
      'Kashmiri',
      'Dogri',
      'Manipuri',
      'Nepali',
      'Sindhi',
      'Bodo',
      'English',
      'Rajasthani',
      'Haryanvi',
      'Bihari',
      'Angika',
      'Tulu',
      'Marwari',
      'Pahari',
      'Khandeshi',
      'Sambalpuri'],
    haveDosh: ['Yes', 'No', 'Not Sure'],
    star: [
      'others','Ashwini', 'Bharani', 'Krittika', 'Rohini', 
      'Mrigashirsha', 'Ardra', 'Punarvasu', 'Pushya', 
      'Ashlesha', 'Maghā', 'Pūrva Phalgunī', 'Uttara Phalgunī', 
      'Hasta', 'Chitra', 'Swati', 'Vishakha', 
      'Anuradha', 'Jyeshtha', 'Mula', 'Pūrva Ashadha', 
      'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 
      'Pūrva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
    ],
    subcaste: [
      'others',
      'Iyer',
      'Iyengar',
      'Smartha',
      'Kashmiri Pandit',
      'Saraswat',
      'Maithil',
      'Rajput',
      'Maratha',
      'Khatri',
      'Sikh',
      'Bania',
      'Agarwal',
      'Gupta',
      'Khandelwal',
      'Nishad',
      'Teli',
      'Kumhar',
      'Dhobi',
      'Barber',
      'Dalit',

      'Chamar',
      'Mahaar',
      'Madiga',
      'Valmiki',
      'Gond',
      'Santhal',
      'Munda',
      'Bhil',
      'Oraon',
      'Yadav',
      'Kurmi',
      'Jat',
      'Koeri',
      'Teli',

    ],
    // Numeric ranges as dropdowns
    minAge: Array.from({ length: 100 }, (_, i) => i + 1),
    maxAge: Array.from({ length: 100 }, (_, i) => i + 1),
    minHeight: Array.from({ length: 100 }, (_, i) => i + 100), // Heights in cm
    maxHeight: Array.from({ length: 100 }, (_, i) => i + 100), // Heights in cm
    annualIncome: ['< 20,000', '20,000 - 50,000', '50,000 - 100,000', '> 100,000'],
  };

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authInfo.token}`,
      },
    };
    RestApi.get('/app/get-preferences', config)
      .then(response => {
        const filteredData = Object.keys(response.data).reduce((acc, key) => {
          if (!['id', 'userId', 'createdAt', 'updatedAt'].includes(key)) {
            acc[key] = response.data[key];
          }
          return acc;
        }, {});
        setFormValues(filteredData);
        console.log("Get Preference", response);
      })
      .catch(error => {
        console.error("There was an error fetching the preferences!", error);
      });
  }, [authInfo.token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.minAge) newErrors.minAge = 'Min Age is required';
    if (!formValues.maxAge) newErrors.maxAge = 'Max Age is required';
    if (!formValues.minHeight) newErrors.minHeight = 'Min Height is required';
    if (!formValues.maxHeight) newErrors.maxHeight = 'Max Height is required';

    Object.keys(formValues).forEach((key) => {
      if (!formValues[key] && formValues[key] !== '') {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill all required fields correctly!',
      });
      return;
    }

    const filteredValues = Object.keys(formValues).reduce((acc, key) => {
      if (!['id', 'userId', 'createdAt', 'updatedAt'].includes(key)) {
        acc[key] = formValues[key];
      }
      return acc;
    }, {});

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authInfo.token}`,
      },
    };
    RestApi.post('/app/add-preference', filteredValues, config)
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Preferences updated successfully!',
        });
      })
      .catch(error => {
        console.error("There was an error updating the preferences!", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'There was an error updating the preferences!',
        });
      });
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        flexGrow: 1,
        p: 3,
        backgroundColor: theme => `${theme.palette.common.white}`,
        padding: 2,
        borderRadius: 1,
        boxShadow: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Preferences Form
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(formValues).map((key) => {
          let val=formValues[key]
              return  <Grid item xs={12} sm={6} md={4} key={key}>
            <TextField
              fullWidth
              name={key}
              label={key === 'minHeight' ? 'Min Height (cm)' : key === 'maxHeight' ? 'Max Height (cm)' : key.charAt(0).toUpperCase() + key.slice(1)}
              value={val}
              onChange={handleInputChange}
              error={!!errors[key]}
              helperText={errors[key]}
              select
            >
              {(options[key] || []).map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
})}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Preferences;
