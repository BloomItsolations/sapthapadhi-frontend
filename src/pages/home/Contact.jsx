import {
  Button,
  Grid,
  Paper,
  Container,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "100px", marginBottom: "100px" }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper sx={{ p: 2, color: "text.secondary" }}>
              <Typography variant="p" sx={{ fontSize: "40px" }}>
                Get in touch
              </Typography>
              <Box sx={{ display: "flex", marginTop: "26px" }}>
                <Box>
                  <LocationOnIcon />
                </Box>
                <Box>
                  <Typography marginLeft={"15px"} variant="p">
                    Address
                  </Typography>
                  <Typography marginLeft={"15px"} variant="p">
                    123 Main St, City, Country
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <Box>
                  <LocalPhoneIcon />
                </Box>
                <Box>
                  <Typography marginLeft={"15px"} variant="p">
                    Phone
                  </Typography>
                  <Typography marginLeft={"15px"} variant="p">
                    +91 1234567890
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", marginTop: "20px" }}>
                <Box>
                  <AlternateEmailIcon />
                </Box>
                <Box>
                  <Typography marginLeft={"15px"} variant="p">
                    Email
                  </Typography>
                  <Typography marginLeft={"15px"} variant="p">
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
                variant="p"
                sx={{ fontSize: "40px", marginBottom: "24px" }}
              >
                Enquiry Form
              </Typography>
              <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Full Name" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Subject" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Message"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth>
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
