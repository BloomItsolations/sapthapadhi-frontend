import React, { useState } from 'react';
import { Button, Grid, Paper, Container, Typography, TextField, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import RestApi from '../../api/RestApi';
import { useNavigate } from 'react-router-dom';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [errors, setErrors] = useState({});
  const { authInfo } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!fullName) errors.fullName = 'Full Name is required';
    if (!email || !emailRegex.test(email)) errors.email = 'Invalid email address';
    if (!phone || !phoneRegex.test(phone)) errors.phone = 'Phone number must be 10 digits';
    if (!message) errors.message = 'Message is required';
    if (!subject) errors.subject = 'Subject is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    if (!authInfo) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please Login..",
      });
      navigate('/login');
      return;
    }
    const formData = {
      fullName,
      email,
      phone,
      message,
      subject
    };

    try {
      const response = await RestApi.post('/app/addEnquiry', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${authInfo?.token}`
        }
      });
      if (response.data) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: "Your message has been sent successfully.",
        });
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSubject('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: "100px", marginBottom: "100px" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, color: "text.secondary" }}>
              <Typography variant="h4" sx={{ fontSize: "40px" }}>
                Get in touch
              </Typography>
              <Box sx={{ display: "flex", marginTop: "26px" }}>
                <Box>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography marginLeft={"15px"} variant="body1">
                    Address
                  </Typography>
                  <Typography marginLeft={"15px"} variant="body2">
                    123 Main St, City, Country
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <Box>
                  <LocalPhoneIcon />
                </Box>
                <Box>
                  <Typography marginLeft={"15px"} variant="body1">
                    Phone
                  </Typography>
                  <Typography marginLeft={"15px"} variant="body2">
                    +91 1234567890
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <Box>
                  <AlternateEmailIcon />
                </Box>
                <Box>
                  <Typography marginLeft={"15px"} variant="body1">
                    Email
                  </Typography>
                  <Typography marginLeft={"15px"} variant="body2">
                    info@example.com
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "30px",
                }}
              >
                <Box marginRight={2}>
                  <InstagramIcon />
                </Box>
                <Box marginRight={2}>
                  <FacebookIcon />
                </Box>
                <Box marginRight={2}>
                  {" "}
                  <LinkedInIcon />
                </Box>
                <Box marginRight={2}>
                  <TwitterIcon />
                </Box>
              </Box>
            </Paper>
          </Grid>
          {/* Enquiry Form */}
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, textAlign: "center", color: "text.secondary" }}>
              <Typography
                variant="h4"
                sx={{ fontSize: "40px", marginBottom: "24px" }}
              >
                Enquiry Form
              </Typography>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      error={!!errors.fullName}
                      helperText={errors.fullName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      error={!!errors.phone}
                      helperText={errors.phone}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      error={!!errors.subject}
                      helperText={errors.subject}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      error={!!errors.message}
                      helperText={errors.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
