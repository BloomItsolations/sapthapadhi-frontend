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

  const [errors, setErrors] = useState({});

  const maritalStatusOptions = ['single', 'divorced', 'widowed', 'married', 'Separated'];
  const eatingHabitsOptions = ['vegetarian', 'non-vegetarian', 'vegan', 'flexitarian', 'halal', 'junk food', 'A Little of everything'];
  const religionOptions = ['Hinduism', 'Sikhism', 'Christianity', 'Jainism', 'Islam', 'Judaism', 'Buddhism', 'Shinto', 'Confucianism', 'Zoroastrianism', 'Others'];

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
    if (!/^\d+$/.test(formValues.minAge)) newErrors.minAge = 'Min Age should be a number';
    if (!/^\d+$/.test(formValues.maxAge)) newErrors.maxAge = 'Max Age should be a number';
    if (!/^\d+$/.test(formValues.minHeight)) newErrors.minHeight = 'Min Height should be a number';
    if (!/^\d+$/.test(formValues.maxHeight)) newErrors.maxHeight = 'Max Height should be a number';

    Object.keys(formValues).forEach((key) => {
      if (!formValues[key] && formValues[key] !== '') {
        newErrors[key] = `${key} is required`;
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
        {Object.keys(formValues).map((key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <TextField
              fullWidth
              name={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={formValues[key]}
              onChange={handleInputChange}
              error={!!errors[key]}
              helperText={errors[key]}
              select={
                ['maritalStatus', 'eatingHabits', 'religion'].includes(key)
              }
            >
              {['maritalStatus', 'eatingHabits', 'religion'].includes(key) &&
                (key === 'maritalStatus' ? maritalStatusOptions : key === 'eatingHabits' ? eatingHabitsOptions : religionOptions).map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
        ))}
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
