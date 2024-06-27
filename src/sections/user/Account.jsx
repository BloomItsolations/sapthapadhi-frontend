import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails, userDetailsById } from "../../store/authSlice";
import Swal from "sweetalert2";
import {
  Avatar,
  Button,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";

export const Account = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState(null);
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [address, setAddress] = useState({
    deliverAddress: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const { authInfo, error } = useSelector((state) => state.auth);

  const profileImage = authInfo.profileImage && authInfo?.profileImage[0]?.path;

  useEffect(() => {
    if (authInfo) {
      setName(authInfo.name);
      setEmail(authInfo.email);
      setPhone(authInfo.phone);
      setImage(profileImage);
    }
  }, [profileImage, authInfo]);

  useEffect(() => {
    dispatch(userDetailsById());
    return () => {};
  }, [dispatch]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(file);
      setNewProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!name || !email || !address || !image) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
      return;
    }

    try {
      dispatch(updateUserDetails({ name, email, address, image }));
      dispatch(userDetailsById());
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        textAlign={"center"}
        sx={{ marginY: 2, color: "primary.main", textAlign: "center" }}
      >
        Profile
      </Typography>
      <Box
        sx={{
          backgroundColor: (theme) => `${theme.palette.common.white}`,
          marginY: 3,
          padding: 2,
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <label htmlFor="profile-pic-input" style={{ cursor: "pointer" }}>
                <Avatar
                  alt="Profile Picture"
                  src={
                    newProfilePic || (image && `http://api.skpay.in//${image}`)
                  }
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: "full",
                    boxShadow: 1,
                  }}
                />
              </label>
              <input
                id="profile-pic-input"
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                style={{ display: "none" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={handleNameChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              value={phone}
              disabled
              onChange={handleNameChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Delivery Address"
              name="deliverAddress"
              value={address.deliverAddress}
              onChange={handleAddressChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="City"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="State"
              name="state"
              value={address.state}
              onChange={handleAddressChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Pin Code"
              name="pinCode"
              value={address.pinCode}
              onChange={handleAddressChange}
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "end", marginY: 2 }}>
          <Button
            onClick={handleUpdateProfile}
            variant="contained"
            fullWidth
            color="primary"
          >
            Update Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Account;
