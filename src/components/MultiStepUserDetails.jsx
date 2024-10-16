import React, { useEffect, useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { updateUserDetails } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { myalldetails } from '../store/userSlice';
import Swal from 'sweetalert2';
import { isProfileComplete } from '../utils/profileValidation';
import { useNavigate } from 'react-router-dom';

const MultiStepForm = ({userDetails}) => {
  const [step, setStep] = useState(1);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { mydetails } = useSelector(state => state.user);

  const [formValues, setFormValues] = useState({
    name: '',
    gender: '',
    dateOfBirth: '',
    age: '',
    height: '',
    weight: '',
    bodyType: '',
    bodyComplexion: '',
    lookingFor: '',
    maritalStatus: '',
    eatingHabits: '',
    drinkingHabits: '',
    smokingHabits: '',
    religion: '',
    caste: '',
    subCaste: '',
    gothra: '',
    star: '',
    physicalStatus:'',
    motherTongue:"",
    highestEducation: '',
    occupation: '',
    annualIncome: '',
    familyLocation: '',
    country: '',
  });
  
   useEffect(() => {
    if (userDetails) {
      setFormValues({ ...formValues, ...userDetails });
    }
  }, [userDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleSave = () => {
    dispatch(updateUserDetails(formValues)).then(() => {
      dispatch(myalldetails());
    });
  };
  useEffect(() => {
    if (mydetails && isProfileComplete(mydetails?.userDetails)) {
      Swal.fire({
        icon: 'success',
        title: 'Profile Complete',
        text: 'Congratulations! Your profile is complete. You can proceed further.',
        confirmButtonText: 'Continue',
      });
      navigate("/app/dashboard", { replace: true });
    }
  }, [mydetails, navigate]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formValues.gender}
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
                value={formValues.dateOfBirth}
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
                value={formValues.age}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Height"
                name="height"
                value={formValues.height}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Weight"
                name="weight"
                value={formValues.weight}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Body Type"
                name="bodyType"
                value={formValues.bodyType}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Body Complexion"
                name="bodyComplexion"
                value={formValues.bodyComplexion}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </>
        );
      case 3:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Looking For</InputLabel>
                <Select
                  name="lookingFor"
                  value={formValues.lookingFor}
                  onChange={handleInputChange}
                >
                  <MenuItem value="men">Men</MenuItem>
                  <MenuItem value="women">Women</MenuItem>
                  <MenuItem value="all">All</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Marital Status</InputLabel>
                <Select
                  name="maritalStatus"
                  value={formValues.maritalStatus}
                  onChange={handleInputChange}
                >
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                  <MenuItem value="divorced">Divorced</MenuItem>
                  <MenuItem value="widowed">Widowed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Eating Habits</InputLabel>
                <Select
                  name="eatingHabits"
                  value={formValues.eatingHabits}
                  onChange={handleInputChange}
                >
                  <MenuItem value="vegetarian">Vegetarian</MenuItem>
                  <MenuItem value="non-vegetarian">Non-Vegetarian</MenuItem>
                  <MenuItem value="vegan">Vegan</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
              <TextField
                label="Drinking Habits"
                name="drinkingHabits"
                value={formValues.drinkingHabits}
                onChange={handleInputChange}
                fullWidth
              />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
              <TextField
                label="Smoking Habits"
                name="smokingHabits"
                value={formValues.smokingHabits}
                onChange={handleInputChange}
                fullWidth
              />
              </FormControl>
            </Grid>
          </>
        );
      case 4:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Religion</InputLabel>
                <Select
                  name="religion"
                  value={formValues.religion}
                  onChange={handleInputChange}
                >
                  <MenuItem value="hinduism">Hinduism</MenuItem>
                  <MenuItem value="islam">Islam</MenuItem>
                  <MenuItem value="christianity">Christianity</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Caste"
                name="caste"
                value={formValues.caste}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sub Caste"
                name="subCaste"
                value={formValues.subCaste}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Gothra"
                name="gothra"
                value={formValues.gothra}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Star"
                name="star"
                value={formValues.star}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </>
        );
      case 5:
        return (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Education"
                name="highestEducation"
                value={formValues.highestEducation}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Occupation"
                name="occupation"
                value={formValues.occupation}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Annual Income"
                name="annualIncome"
                value={formValues.annualIncome}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Family Location"
                name="familyLocation"
                value={formValues.familyLocation}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Physical Status"
                name="physicalStatus"
                value={formValues.physicalStatus}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mother Tounge"
                name="motherTongue"
                value={formValues.motherTongue}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Country"
                name="country"
                value={formValues.country}
                onChange={handleInputChange}
                fullWidth
              />
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form className="bg-white mt-[25px] px-4 py-7 rounded-[10px]">
      <Grid container spacing={2}>
        {renderStep()}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={step === 5 ? handleSave : handleNext}
            fullWidth
          >
            {step === 5 ? 'Submit' : 'Next'}
          </Button>
          {step > 1 && (
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleBack}
              fullWidth
              style={{ marginTop: '10px' }}
            >
              Back
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default MultiStepForm;
