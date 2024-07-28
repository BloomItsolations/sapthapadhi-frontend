import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography, MenuItem } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RestApi from '../../api/RestApi';

const Preferences = () => {

  const {authInfo}=useSelector((state)=>state.auth);

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

  const maritalStatusOptions = ['single', 'divorced', 'widowed', 'married', 'Separated'];
  const eatingHabitsOptions = ['vegetarian', 'non-vegetarian', 'vegan', 'flexitarian', 'halal', 'junk food', 'A Little of everything'];
  const religionOptions = ['Hinduism', 'Sikhism', 'Christianity', 'Jainism', 'Islam', 'Judaism', 'Buddhism', 'Shinto', 'Confucianism', 'Zoroastrianism', 'Others'];

  useEffect(() => {
    // Fetch existing preferences and update the form values
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authInfo.token}`,
      },
    };
    RestApi.get('/app/get-preferences',config)
      .then(response => {
        setFormValues(response.data);
        console.log("Get Preference",response)
      })
      .catch(error => {
        console.error("There was an error fetching the preferences!", error);
      });
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Submit logic here
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authInfo.token}`,
      },
    };
    RestApi.post('/app/add-preference', formValues, config)
      .then(response => {
        console.log("Preferences updated successfully", response);
      })
      .catch(error => {
        console.error("There was an error updating the preferences!", error);
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
        {/* <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="minAge"
            label="Min Age"
            value={formValues.minAge}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="maxAge"
            label="Max Age"
            value={formValues.maxAge}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="minHeight"
            label="Min Height"
            value={formValues.minHeight}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="maxHeight"
            label="Max Height"
            value={formValues.maxHeight}
            onChange={handleInputChange}
          />
        </Grid> */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            select
            name="maritalStatus"
            label="Marital Status"
            value={formValues.maritalStatus}
            onChange={handleInputChange}
          >
            {maritalStatusOptions.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="motherTongue"
            label="Mother Tongue"
            value={formValues.motherTongue}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="physicalStatus"
            label="Physical Status"
            value={formValues.physicalStatus}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            select
            name="eatingHabits"
            label="Eating Habits"
            value={formValues.eatingHabits}
            onChange={handleInputChange}
          >
            {eatingHabitsOptions.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="drinkingHabits"
            label="Drinking Habits"
            value={formValues.drinkingHabits}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="smokingHabits"
            label="Smoking Habits"
            value={formValues.smokingHabits}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            select
            name="religion"
            label="Religion"
            value={formValues.religion}
            onChange={handleInputChange}
          >
            {religionOptions.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="caste"
            label="Caste"
            value={formValues.caste}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="subcaste"
            label="Subcaste"
            value={formValues.subcaste}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="haveDosh"
            label="Have Dosh"
            value={formValues.haveDosh}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="star"
            label="Star"
            value={formValues.star}
            onChange={handleInputChange}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="education"
            label="Education"
            value={formValues.education}
            onChange={handleInputChange}
          />
        </Grid> */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="occupation"
            label="Occupation"
            value={formValues.occupation}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="annualIncome"
            label="Annual Income"
            value={formValues.annualIncome}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Preferences;
