import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, updateUserDetails, userDetailsById } from '../../store/authSlice';
import Swal from 'sweetalert2';
import { Avatar, Button, Grid, TextField, Box } from '@mui/material';
import UserDetails from './UserDetails';
import { myalldetails } from '../../store/userSlice';
export const Profile = () => {
  const dispatch=useDispatch();
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [newProfilePic, setNewProfilePic] = useState(null);
  const [address, setAddress] = useState({
    deliverAddress: '',
    city: '',
    state: '',
    pinCode: '',
  });
  const { authInfo, error,success } = useSelector(state => state.auth);
   useEffect(()=>{
         if(success){
          Swal.fire({
            icon: 'success',
            title: 'Profile Updated Successful',
            text: success,
          });
          dispatch(clearError());
         }
         
   },[success])

  const { mydetails } = useSelector(state => state.user);
  const profileImage = mydetails?.userDetails?.profilePhoto && `${process.env.REACT_APP_IMASE_BASE_URL}/${mydetails?.userDetails?.profilePhoto?.path}`;
  console.log("ProfieImage",profileImage);
  useEffect(() => {
    if (mydetails?.user) {
      setFirstName(mydetails.user.firstName);
      setLastName(mydetails.user.lastName);
      setEmail(mydetails.user.email);
      setPhone(mydetails.user.phone);
      setImage(profileImage);
    }
  }, [profileImage, mydetails]);

  useEffect(() => {
    dispatch(userDetailsById());
    dispatch(myalldetails());
    return () => {};
  }, [dispatch]);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleProfilePicChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(file);
      setNewProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddressChange = event => {
    const { name, value } = event.target;
    setAddress({ ...address, [name]: value });
  };

  const handleUpdateProfile = e => {
    e.preventDefault();   
     let formData=new FormData();
     formData.append('firstName',firstName);
     formData.append('lastName',lastName);
     formData.append('email',email);
     formData.append('image',image);
    try {
      dispatch(updateUserDetails(formData));
      dispatch(userDetailsById());
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
      });
    }
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: theme => `${theme.palette.common.white}`,
          padding: 2,
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <label htmlFor="profile-pic-input" style={{ cursor: 'pointer' }}>
                <Avatar
                  alt="Profile Picture"
                  src={
                    newProfilePic || (image && `${image}`)
                  }
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: 'full',
                    boxShadow: 1,
                  }}
                />
              </label>
              <input
                id="profile-pic-input"
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
                style={{ display: 'none' }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
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
          
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'end', marginY: 2 }}>
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
      <UserDetails userDetails={mydetails?.userDetails}/>
    </Box>
  );
};
export default Profile;
