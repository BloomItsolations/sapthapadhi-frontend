import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateUserDetails } from '../../store/authSlice';

const UserDetails = ({ userDetails, onSave }) => {
  const [formValues, setFormValues] = useState(userDetails);
  const dispatch = useDispatch();

  console.log('userDetails',userDetails);

  useEffect(() => {
    setFormValues(userDetails);
  }, [userDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues({ ...formValues, [name]: checked });
  };

  const handleSave = () => {
    dispatch(updateUserDetails(formValues));
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            name="name"
            value={formValues?.name || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              value={formValues?.gender || ''}
              onChange={handleInputChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="others">Others</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={formValues?.dateOfBirth || ''}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formValues?.age || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Height"
            name="height"
            value={formValues?.height || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Weight"
            name="weight"
            value={formValues?.weight || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Looking For</InputLabel>
            <Select
              name="lookingFor"
              value={formValues?.lookingFor || ''}
              onChange={handleInputChange}
            >
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="All">All</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Marital Status</InputLabel>
            <Select
              name="maritalStatus"
              value={formValues?.maritalStatus || ''}
              onChange={handleInputChange}
            >
              <MenuItem value="single">Single</MenuItem>
              <MenuItem value="divorced">Divorced</MenuItem>
              <MenuItem value="widowed">Widowed</MenuItem>
              <MenuItem value="married">Married</MenuItem>
              <MenuItem value="Separated">Separated</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Body Type"
            name="bodyType"
            value={formValues?.bodyType || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Body Complexion"
            name="bodyComplexion"
            value={formValues?.bodyComplexion || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Physical Status"
            name="physicalStatus"
            value={formValues?.physicalStatus || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Mother Tongue"
            name="motherTongue"
            value={formValues?.motherTongue || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Eating Habits</InputLabel>
            <Select
              name="eatingHabits"
              value={formValues?.eatingHabits || ''}
              onChange={handleInputChange}
            >
              <MenuItem value="vegetarian">Vegetarian</MenuItem>
              <MenuItem value="non-vegetarian">Non-Vegetarian</MenuItem>
              <MenuItem value="vegan">Vegan</MenuItem>
              <MenuItem value="flexitarian">Flexitarian</MenuItem>
              <MenuItem value="halal">Halal</MenuItem>
              <MenuItem value="junk food">Junk Food</MenuItem>
              <MenuItem value="A Little of everything">A Little of Everything</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Drinking Habits"
            name="drinkingHabits"
            value={formValues?.drinkingHabits || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Smoking Habits"
            name="smokingHabits"
            value={formValues?.smokingHabits || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Religion</InputLabel>
            <Select
              name="religion"
              value={formValues?.religion || ''}
              onChange={handleInputChange}
            >
              <MenuItem value="Hinduism">Hinduism</MenuItem>
              <MenuItem value="Sikhism">Sikhism</MenuItem>
              <MenuItem value="Christianity">Christianity</MenuItem>
              <MenuItem value="Jainism">Jainism</MenuItem>
              <MenuItem value="Islam">Islam</MenuItem>
              <MenuItem value="Judaism">Judaism</MenuItem>
              <MenuItem value="Buddhism">Buddhism</MenuItem>
              <MenuItem value="Shinto">Shinto</MenuItem>
              <MenuItem value="Confucianism">Confucianism</MenuItem>
              <MenuItem value="Zoroastrianism">Zoroastrianism</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Caste"
            name="caste"
            value={formValues?.caste || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Sub Caste"
            name="subCaste"
            value={formValues?.subCaste || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Gothra"
            name="gothra"
            value={formValues?.gothra || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Star"
            name="star"
            value={formValues?.star || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        
        
        <Grid item xs={12} sm={6}>
          <TextField
            label="Education"
            name="highestEducation"
            value={formValues?.highestEducation || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Occupation"
            name="occupation"
            value={formValues?.occupation || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Income"
            name="annualIncome"
            value={formValues?.annualIncome || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Address"
            name="familyLocation"
            value={formValues?.familyLocation || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country"
            name="country"
            value={formValues?.country || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
       
        
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserDetails;
