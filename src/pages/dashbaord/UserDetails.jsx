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
   console.log("formValues",formValues);
   const dispatch=useDispatch();
   useEffect(()=>{
    setFormValues(userDetails)
   },[userDetails])

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = e => {
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
              <MenuItem value="Friendship">Friendship</MenuItem>
              <MenuItem value="Relationship">Relationship</MenuItem>
              <MenuItem value="Marriage">Marriage</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Marital Status"
            name="maritalStatus"
            value={formValues?.maritalStatus || ''}
            onChange={handleInputChange}
            fullWidth
          />
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
          <TextField
            label="Eating Habits"
            name="eatingHabits"
            value={formValues?.eatingHabits || ''}
            onChange={handleInputChange}
            fullWidth
          />
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
          <TextField
            label="Religion"
            name="religion"
            value={formValues?.religion || ''}
            onChange={handleInputChange}
            fullWidth
          />
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
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues?.willingToMarryFromOtherCommunities || false}
                onChange={handleCheckboxChange}
                name="willingToMarryFromOtherCommunities"
              />
            }
            label="Willing to Marry from Other Communities"
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
            label="Raasi Moon Sign"
            name="raasiMoonSign"
            value={formValues?.raasiMoonSign || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Zodiac Star Sign"
            name="zodiacStarSign"
            value={formValues?.zodiacStarSign || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues?.haveDosh || false}
                onChange={handleCheckboxChange}
                name="haveDosh"
              />
            }
            label="Have Dosh"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Time of Birth"
            name="timeOfBirth"
            type="time"
            value={formValues?.timeOfBirth || ''}
            onChange={handleInputChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Place of Birth"
            name="placeOfBirth"
            value={formValues?.placeOfBirth || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Country Living In"
            name="countryLivingIn"
            value={formValues?.countryLivingIn || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Citizenship"
            name="citizenship"
            value={formValues?.citizenship || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Residing City"
            name="residingCity"
            value={formValues?.residingCity || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Ancestral Origin"
            name="ancestralOrigin"
            value={formValues?.ancestralOrigin || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Highest Education"
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
            label="Annual Income"
            name="annualIncome"
            value={formValues?.annualIncome || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Family Value"
            name="familyValue"
            value={formValues?.familyValue || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Family Status"
            name="familyStatus"
            value={formValues?.familyStatus || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Number of Siblings"
            name="noofSiblings"
            value={formValues?.noofSiblings || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Family Location"
            name="familyLocation"
            value={formValues?.familyLocation || ''}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Hobbies"
            name="hobbies"
            value={formValues?.hobbies || ''}
            onChange={handleInputChange}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="In My Own Words"
            name="inMyOwnWordsClose"
            value={formValues?.inMyOwnWordsClose || ''}
            onChange={handleInputChange}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserDetails;
