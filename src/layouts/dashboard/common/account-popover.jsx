import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from '../../../routes/hooks';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { logout } from '../../../store/authSlice';
import { Link } from 'react-router-dom';
// ---------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    path: '/',
  },
  {
    label: 'Edit Profile',
    path: 'dashboard/profile',
  },
  {
    label: 'Edit preferences',
    path: 'dashboard/preferences',
  }
];

// -------------------------------------

export default function AccountPopover() {

  let myPlan = JSON.parse(localStorage.getItem('myplan'));
  const { mydetails } = useSelector(state => state.user);
  const profileImage = mydetails?.userDetails?.profilePhoto && JSON.parse(mydetails?.userDetails?.profilePhoto)?.path;

  const router = useRouter();
  const { authInfo } = useSelector(state => state.auth);
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  const handleOpen = event => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: theme => alpha(theme.palette.primary.main, 0.08),
          ...(open && {
            background: theme =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        {authInfo?.profileImage === null ? (
          <Avatar
            sx={{
              width: 36,
              height: 36,
              border: theme => `solid 2px ${theme.palette.background.default}`,
            }}
          >
            {authInfo.name.charAt(0).toUpperCase()}
          </Avatar>
        ) : (
          <Avatar
            key={'alt'}
             src={`${process.env.REACT_APP_IMASE_BASE_URL}/${profileImage}`}
            sx={{
              width: 36,
              height: 36,
              border: theme => `solid 2px ${theme.palette.background.default}`,
              
            }}
          ></Avatar>
        )}
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {authInfo?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {authInfo?.phone}
          </Typography>
          {
            myPlan && <div className='text-black font-sans font-bold flex items-center'>
              <h2>My Plan: </h2>
              <p className='text-[15px] font-sans font-semibold'>{myPlan?.name}</p>
            </div>
          }

        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {MENU_OPTIONS.map((option, index) => (
          <Link to={option.path} key={index + 1}>
            <MenuItem onClick={handleClose}>{option.label}</MenuItem>
          </Link>
        ))}

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleLogout}
          sx={{ typography: 'body2', color: 'error.main', py: 1.5 }}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
