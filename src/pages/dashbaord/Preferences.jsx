import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const Preferences = () => {
  const [formValues, setFormValues] = useState({
    age: '',
    height: '',
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
    employedIn: '',
    occupation: '',
    annualIncome: '',
    country: '',
    ancestralOrigin: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
    // You can add your submit logic here
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{ flexGrow: 1, p: 3 }}
    >
      <Typography variant="h4" gutterBottom>
        Preferences Form
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="age"
            label="Age"
            value={formValues.age}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="height"
            label="Height"
            value={formValues.height}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="maritalStatus"
            label="Marital Status"
            value={formValues.maritalStatus}
            onChange={handleInputChange}
          />
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
            name="eatingHabits"
            label="Eating Habits"
            value={formValues.eatingHabits}
            onChange={handleInputChange}
          />
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
            name="religion"
            label="Religion"
            value={formValues.religion}
            onChange={handleInputChange}
          />
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
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="education"
            label="Education"
            value={formValues.education}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="employedIn"
            label="Employed In"
            value={formValues.employedIn}
            onChange={handleInputChange}
          />
        </Grid>
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
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="country"
            label="Country"
            value={formValues.country}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            name="ancestralOrigin"
            label="Ancestral Origin"
            value={formValues.ancestralOrigin}
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
