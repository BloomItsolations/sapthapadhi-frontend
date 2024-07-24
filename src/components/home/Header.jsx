// src/components/Header.js
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField, MenuItem, Button } from "@mui/material";
import { country_list } from "../../_mock/country";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const Header = () => {
  const navigate = useNavigate();
  const [lookingFor, setLookingFor] = React.useState("");
  const [age, setAge] = React.useState("");
  const [religion, setReligion] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "lookingFor":
        setLookingFor(value);
        break;
      case "age":
        setAge(value);
        break;
      case "religion":
        setReligion(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  };
   let auth=useSelector(state=>state.auth?.authInfo);
  const handleSearch = () => {
     if(!auth){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please Login First..",
      });
      navigate('/login')
      return;
     }
    const queryParams = new URLSearchParams({
      age,
      religion,
      location,
    }).toString();

    navigate(`/app/dashboard?${queryParams}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
        overflow: "hidden",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'url("images/homepageimage.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(0.5px)",
          zIndex: -1,
        },
        "::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: -1,
        },
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "24px", sm: "40px", md: "64px" },
            fontFamily: "Noto Serif",
            mb: 2,
            fontWeight: "600",
          }}
        >
          Find your
          <br />
          <span style={{ color: "red" }}>Right Match</span> here
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "16px", sm: "30px", md: "48px" },
            fontFamily: "Cabin",
            mb: 4,
          }}
        >
          “One love, one heart, one destiny.”
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "#fff",
          opacity: 0.9,
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: 2,
          width: "100%",
          maxWidth: "1100px",
          marginTop: "30px",
        }}
      >
        {/* <TextField
          fullWidth
          label="Looking For"
          name="lookingFor"
          select
          value={lookingFor}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value="">Select your Preference</MenuItem>
          <MenuItem value="bride">Bride</MenuItem>
          <MenuItem value="groom">Groom</MenuItem>
        </TextField> */}
        <TextField
          fullWidth
          label="Age"
          name="age"
          select
          value={age}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value="18-25">18-25</MenuItem>
          <MenuItem value="26-35">26-35</MenuItem>
          <MenuItem value="36-45">36-45</MenuItem>
          <MenuItem value="46-60">46-60</MenuItem>
        </TextField>
        <TextField
          fullWidth
          label="Religion"
          name="religion"
          select
          value={religion}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value="">Select Your Religion</MenuItem>
          {[
            "Hinduism",
            "Sikhism",
            "Christianity",
            "Jainism",
            "Islam",
            "Judaism",
            "Buddhism",
            "Shinto",
            "Confucianism",
            "Zoroastrianism",
            "Others",
          ].map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          label="Location"
          name="location"
          select
          value={location}
          onChange={handleChange}
          variant="outlined"
        >
          <MenuItem value="">Select Your Country</MenuItem>
          {country_list?.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>

        <Button
          fullWidth
          color="secondary"
          variant="contained"
          onClick={handleSearch}
          sx={{
            color: (theme) => theme.palette.text.primary,
            boxShadow: "none",
            textTransform: "uppercase",
            borderRadius: 1,
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          Let's Begin
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
