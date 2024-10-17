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

  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);
  const heightOptions = Array.from({ length: 101 }, (_, i) => i + 100);
  const weightOptions = Array.from({ length: 121 }, (_, i) => i + 30); // Weights from 30 kg to 150 kg
  const bodyTypeOptions = ['Slim','Athletic','Average','Stocky','Curvy','Plus Size','Muscular','Petite','Tall','Others',
  ];
  const complexionOptions = ['Fair','Medium','Olive','Dark','Wheatish','Dusky','Tan','Others'];
  const physicalStatusOptions = ['Healthy', 'Physically Challenged'];
  const motherTongueOptions = ['Other', 'Hindi','Bengali','Telugu','Marathi','Tamil','Urdu','Gujarati','Malayalam','Kannada','Odia','Punjabi','Assamese','Maithili','Santali','Kashmiri','Dogri','Manipuri','Nepali','Sindhi','Bodo','English','Rajasthani','Haryanvi','Bihari','Angika','Tulu','Marwari','Pahari','Khandeshi','Sambalpuri']
  const drinkingHabitsOptions = [
    'Non-Drinker',
    'Social Drinker',
    'Regular Drinker',
  ];
  const smokingHabitsOptions = [
    'Non-Smoker',
    'Occasional Smoker',
    'Regular Smoker',
  ];
  const casteOptions = [
    'Brahmin', 'Kshatriya', 'Vaishya', 'Shudra',
    'Scheduled Castes', 'Scheduled Tribes', 'Other Backward Classes',
    'Iyer', 'Iyengar', 'Rajput', 'Maratha', 'Bania', 'Yadav',
    'Dalit', 'Santhal', 'Gond', 'Others'
  ]
  const subCasteOptions = ['others','Iyer','Iyengar','Smartha','Kashmiri Pandit','Saraswat','Maithil','Rajput','Maratha','Khatri','Sikh','Bania','Agarwal','Gupta','Khandelwal','Nishad','Teli','Kumhar','Dhobi','Barber','Dalit','Chamar','Mahaar','Madiga','Valmiki','Gond','Santhal','Munda','Bhil','Oraon','Yadav','Kurmi','Jat','Koeri','Teli']
  const gothraOptions = ['Brahma','Garg','Kashyap','Mishra','Sharma','Shukla','Vats','Awasthi','Saraswat','Bansal','Bhargava','Kaushik','Purohit','Tripathi','Tiwari','Nayak','Rana','Bhardwaj','Siddhanta','Pandey','Others'];
  const star = [
    'others', 'Ashwini', 'Bharani', 'Krittika', 'Rohini',
    'Mrigashirsha', 'Ardra', 'Punarvasu', 'Pushya',
    'Ashlesha', 'Maghā', 'Pūrva Phalgunī', 'Uttara Phalgunī',
    'Hasta', 'Chitra', 'Swati', 'Vishakha',
    'Anuradha', 'Jyeshtha', 'Mula', 'Pūrva Ashadha',
    'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
    'Pūrva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
  ]
    const education = ['High School', 'Undergraduate', 'Postgraduate', 'Doctorate']
  const occupation = ['Software Engineer', 'Doctor', 'Teacher', 'Engineer', 'Nurse', 'Accountant', 'Manager', 'Artist', 'Writer', 'Business Owner', 'Unemployed', 'Others']

  const [formValues, setFormValues] = useState(userDetails);
  const dispatch = useDispatch();

  console.log('userDetails', userDetails);
  if (userDetails?.profilePhoto) {
    console.log("Profile Photo", JSON.parse(userDetails?.profilePhoto)?.path);

  }
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
    <form className='bg-white mt-[25px] px-4 py-7 rounded-[10px]'>
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
            value={formValues?.age || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {ageOptions?.map((age) => (
              <MenuItem key={age} value={age}>
                {age}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Height (cm)"
            name="height"
            value={formValues?.height || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {heightOptions.map((height) => (
              <MenuItem key={height} value={height}>
                {height}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Weight (kg)"
            name="weight"
            value={formValues?.weight || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {weightOptions.map((weight) => (
              <MenuItem key={weight} value={weight}>
                {weight}
              </MenuItem>
            ))}
          </TextField>
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
            value={formValues?.bodyType || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {bodyTypeOptions.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Body Complexion"
            name="bodyComplexion"
            value={formValues?.bodyComplexion || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {complexionOptions.map((complexion) => (
              <MenuItem key={complexion} value={complexion}>
                {complexion}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Physical Status"
            name="physicalStatus"
            value={formValues?.physicalStatus || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {physicalStatusOptions.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Mother Tongue"
            name="motherTongue"
            value={formValues?.motherTongue || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {motherTongueOptions.map((tongue) => (
              <MenuItem key={tongue} value={tongue}>
                {tongue}
              </MenuItem>
            ))}
          </TextField>
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
            value={formValues?.drinkingHabits || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {drinkingHabitsOptions.map((habit) => (
              <MenuItem key={habit} value={habit}>
                {habit}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Smoking Habits"
            name="smokingHabits"
            value={formValues?.smokingHabits || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {smokingHabitsOptions.map((habit) => (
              <MenuItem key={habit} value={habit}>
                {habit}
              </MenuItem>
            ))}
          </TextField>
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
            value={formValues?.caste || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {casteOptions.map((caste) => (
              <MenuItem key={caste} value={caste}>
                {caste}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Sub Caste"
            name="subCaste"
            value={formValues?.subCaste || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {subCasteOptions.map((subCaste) => (
              <MenuItem key={subCaste} value={subCaste}>
                {subCaste}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Gothra"
            name="gothra"
            value={formValues?.gothra || ''} // Use existing form value or empty string
            onChange={handleInputChange}
            fullWidth
            select // Make it a dropdown
          >
            {gothraOptions.map((gothra) => (
              <MenuItem key={gothra} value={gothra}>
                {gothra}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Star"
            name="star"
            value={formValues?.star || ''}
            onChange={handleInputChange}
            fullWidth
            select
          >
            {star.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Education"
            name="highestEducation"
            value={formValues?.highestEducation || ''}
            onChange={handleInputChange}
            fullWidth
            select
          >
            {education.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Occupation"
            name="occupation"
            value={formValues?.occupation || ''}
            onChange={handleInputChange}
            fullWidth
            select
          >
            {occupation.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Income"
            name="annualIncome"
            value={formValues?.annualIncome || ''}
            onChange={handleInputChange}
            fullWidth
            select
          >
            {[
              '< 20,000',
              '20,000 - 50,000',
              '50,000 - 100,000',
              '> 100,000'
            ].map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
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
            fullWidth
          >
            Update User Details
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserDetails;
