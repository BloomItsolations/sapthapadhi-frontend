import * as Yup from 'yup';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo';
import { alpha, useTheme } from '@mui/material/styles';
import Swal from 'sweetalert2';
import { country_list } from '.././../_mock/country';
import {
  Box,
  Card,
  Stack,
  Button,
  TextField,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
} from '@mui/material';

import Iconify from '../../components/iconify';
import { bgGradient } from '../../theme/css';

import { clearError, userRegister } from '../../store/authSlice';

export default function RegisterPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, success } = useSelector(state => state.auth);
  
  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have successfully registered!',
      });
      dispatch(clearError());
    }
    if(error){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
      dispatch(clearError());
    }
  }, [success,error]);


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      lookingFor: '',
      dateOfBirth: '',
      religion: '',
      country: '',
      password: '',
      gender:''
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required('Frist Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address'),
      phone: Yup.string()
        .required('Phone is required')
        .matches(
          /^[6-9]\d{9}$/,
          'Phone number must be exactly 10 digits and start with 6, 7, 8, or 9',
        ),
      lookingFor: Yup.string().required('Looking For  is required'),
      dateOfBirth: Yup.string().required('Date Of Birth is required'),
      religion: Yup.string().required('religion is required'),
      country: Yup.string().required('Country is required'),
      password: Yup.string().required('Password is required'),
      gender: Yup.string().required('Gender is required'),
    }),

    onSubmit: values => {
      dispatch(clearError());
      dispatch(userRegister(values))   
    },
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  return (
    <>
      <Helmet>
        <title> Register | sapthapadhi </title>
      </Helmet>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_4.jpg',
          }),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          paddingY: 16,
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ width: 1, height: 1 }}
        >
          <Card
            sx={{
              p: 4,
              width: 1,
              maxWidth: 1024,
            }}
          >
            <Box sx={{ textAlign: 'center', margin: 0, padding: 0 }}>
              <Logo />
            </Box>

            <Typography
              variant="h4"
              paddingY={1}
              textAlign={'center'}
              sx={{ color: theme => theme.palette.primary.main }}
            >
              Create a Matrimony Profile
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                py: 1,
              }}
            >
              <Typography variant="body2" textAlign="center">
                Already have an Account?{' '}
              </Typography>
              <Link to="/login" variant="subtitle2" className="text-red-600">
                Login here.
              </Link>
            </Box>
            <Box component="form" sx={{ py: 2 }} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="firstName"
                    label="First Name"
                    autoComplete="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={touched.firstName && errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="lastName"
                    label="Last Name"
                    autoComplete="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="email"
                    label={'Email'}
                    autoComplete="current-email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="phone"
                    label={'Phone Number'}
                    autoComplete="current-mobile-number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="lookingFor"
                    label="Looking For"
                    autoComplete="lookingFor"
                    value={values.lookingFor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lookingFor && Boolean(errors.lookingFor)}
                    helperText={touched.lookingFor && errors.lookingFor}
                  >
                    <MenuItem value="">Select your Preference</MenuItem>
                    <MenuItem value="men">Men</MenuItem>
                    <MenuItem value="women">Women</MenuItem>
                    <MenuItem value="All">All</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="gender"
                    label={'Gender'}
                    autoComplete="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={''}
                    error={touched.gender && Boolean(errors.gender)}
                    helperText={touched.gender && errors.gender}
                  >
                    <MenuItem value="">{'Select Your Gender '}</MenuItem>
                    {[
                      'male',
                      'female',
                      'others',
                    ].map(item => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="medium"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    name="dateOfBirth"
                    label={'Date Of Birth'}
                    autoComplete="tel"
                    value={values.dateOfBirth}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                    helperText={touched.dateOfBirth && errors.dateOfBirth}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="religion"
                    label={'Religion'}
                    autoComplete="religion"
                    value={values.religion}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    defaultValue={''}
                    error={touched.religion && Boolean(errors.religion)}
                    helperText={touched.religion && errors.religion}
                  >
                    <MenuItem value="">{'Select Your Religion '}</MenuItem>
                    {[
                      'Hinduism',
                      'Sikhism',
                      'Christianity',
                      'Jainism',
                      'Islam',
                      'Judaism',
                      'Buddhism',
                      'Shinto',
                      'Confucianism',
                      'Zoroastrianism',
                      'Others',
                    ].map(item => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="medium"
                    select
                    InputLabelProps={{ shrink: true }}
                    name="country"
                    label={'Country'}
                    autoComplete="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.country && Boolean(errors.country)}
                    helperText={touched.country && errors.country}
                  >
                    <MenuItem value="">{'Select Your Country '}</MenuItem>
                    {country_list?.map(item => (
                      <MenuItem value={item}>{item}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="medium"
                    InputLabelProps={{ shrink: true }}
                    name="password"
                    label={'Password'}
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    sx={{
                      input: { color: theme.palette.text.primary },
                      color: theme.palette.text.primary,
                    }}
                    onBlur={handleBlur}
                    autoComplete="current-password"
                    type={showPassword ? 'Text' : 'password'}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            <Iconify
                              icon={
                                showPassword
                                  ? 'eva:eye-fill'
                                  : 'eva:eye-off-fill'
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              <Typography>I agree to the terms and conditions</Typography>
              <Button
                sx={{
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
                disabled={loading}
              >
                {loading ? 'loading ...' : 'Join Now'}
              </Button>
            </Box>

            {error ? (
              <Typography
                variant="body1"
                color="error"
                sx={{ my: 2 }}
                textAlign="center"
              >
                Error : {error}
              </Typography>
            ) : success ? (
              <Typography
                variant="body1"
                color="primary"
                sx={{ my: 2 }}
                textAlign="center"
              >
                {success}.
              </Typography>
            ) : null}
          </Card>
        </Stack>
      </Box>
    </>
  );
}
