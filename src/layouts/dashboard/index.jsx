import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import Header from './header';
import { isProfileComplete } from '../../utils/profileValidation';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const { mydetails } = useSelector(state => state.user);
   console.log("Muydetails",mydetails?.userDetails)
  useEffect(() => {
     if(mydetails){
     console.log("isProfileComplete(mydetails?.userDetails)",isProfileComplete(mydetails?.userDetails));
     
      if (!isProfileComplete(mydetails?.userDetails)) {
        Swal.fire({
          icon: 'warning',
          title: 'Profile Incomplete',
          text: 'Your profile is incomplete! Please fill out the required details to proceed.',
          confirmButtonText: 'Go to Profile Setup',
        })
        navigate("/app/dashboard/profile-setup", { replace: true });
      }
     }
  }, [mydetails, navigate]);  

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>
          <Outlet />
        </Main>
      </Box>
    </>
  );
}
