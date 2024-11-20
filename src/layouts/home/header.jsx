import { v4 as uuidv } from 'uuid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Box,
  Menu,
  AppBar,
  Button,
  Toolbar,
  MenuItem,
  useTheme,
  Typography,
  IconButton,
  Avatar,
  ListItemIcon,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

import { useResponsive } from '../../hooks/use-responsive';

import Logo from '../../components/logo';

import { HEADER } from '../dashboard/config-layout';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
const pages = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Plans', to: '/pricing' },
  { name: 'Gallary', to: '/gallery' },
  { name: 'Contact', to: '/contact' },
];
const userNavigation = [
  { name: 'User Dashboard', to: '/app/dashboard', icon: <AccountCircleIcon /> },
  { name: 'Contact Us', to: '/contact', icon: <ChatIcon /> },
];

const Header = () => {
  const dispatch = useDispatch();

  const lgUp = useResponsive('up', 'md');
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { authInfo } = useSelector(state => state.auth);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    dispatch(logout());
    handleCloseUserMenu();
  };
  return (
    <AppBar
      component="nav"
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        backgroundImage: 'none',
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 8 },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Logo />
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {pages.map(page => (
            <Link key={uuidv()} to={page.to}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  mx: 2,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    color: '#ff4949',
                  },
                }}
              >
                {page.name}
              </Typography>
            </Link>
          ))}
          {authInfo !== null ? (
            <Box onClick={handleOpenUserMenu} color="inherit">
              {authInfo?.name ? (
                <Avatar
                  sx={{
                    color: 'primary.main',
                    backgroundColor: 'common.white',
                    width: 36,
                    height: 36,
                    border: theme =>
                      `solid 2px ${theme.palette.background.default}`,
                  }}
                  src=''
                >
                  {authInfo?.name?.charAt(0).toUpperCase()}
                </Avatar>
              ) : (
                <AccountCircleIcon />
              )}
            </Box>
          ) : (
            <>
              <Link to="/login">
                <Button
                  color="secondary"
                  variant="outlined"
                  size="medium"
                  sx={{
                    color: theme.palette.text.primary,
                    boxShadow: 'none',
                    borderRadius: 6,
                    border:'1px solid #f95351',
                    '&:hover':{
                      backgroundColor:'#f95351',
                      color: 'white'
                    }
                  }}
                >
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  color="secondary"
                  variant="contained"
                  size="medium"
                  sx={{
                    color:'white',
                    boxShadow: 'none',
                    textTransform: 'uppercase',
                    borderRadius: 6,
                    backgroundColor:'#f95351',
                    
                    '&:hover':{
                      backgroundColor:'#f20a07ed'
                    }

                  }}
                >
                  Join Now
                </Button>
              </Link>
            </>
          )}
          <Menu
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            PaperProps={{
              elevation: 1,
              sx: {
                overflow: 'visible',
                my: 1,
                paddingY: 2,
                paddingX: 1,
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            {authInfo !== null ? (
              <>
                {userNavigation?.map(item => (
                  <MenuItem
                    key={uuidv()}
                    component={Link}
                    to={item.to}
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      textWrap: 'nowrap',
                      color: 'primary.main',
                      borderColor: '#000',
                      borderBottom: 1,
                    }}
                  >
                    <ListItemIcon sx={{ color: 'primary.main' }}>
                      {item.icon}
                    </ListItemIcon>
                    {item.name}
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={logoutHandler}
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    color: 'primary.main',
                    borderColor: 'black',
                  }}
                >
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  Sign out
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleCloseNavMenu} sx={{ borderBottom: 1 }}>
                  <Box
                    component="a"
                    href="/register"
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'start',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Typography variant="body2">New User?</Typography>
                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                      Sign Up
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    color: 'primary.main',
                    borderBottom: 1,
                    borderColor: 'black',
                  }}
                >
                  <Link to="/login">Member Logins</Link>
                </MenuItem>
              </>
            )}
          </Menu>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            sx={{ padding: 0 }}
            size="large"
            aria-label="menu-appbar"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="secondary"
          >
            <MenuIcon
              fontSize="medium"
              sx={{ color: theme.palette.text.primary }}
            />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              width: '100%',
            }}
          >
            {pages.map(page => (
              <MenuItem key={uuidv()}>
                <Link to={page.to}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '16px',
                      fontWeight: 500,
                      mx: 2,
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.text.hover,
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
            {authInfo === null ? (
              <>
                <MenuItem>
                  <Link to="/login">
                    <Button
                      color="secondary"
                      variant="outlined"
                      size="medium"
                      fullWidth
                      sx={{
                        color: theme.palette.text.primary,
                        boxShadow: 'none',
                        borderRadius: 6,
                      }}
                    >
                      Log in
                    </Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/register">
                    <Button
                      color="secondary"
                      variant="contained"
                      size="medium"
                      sx={{
                        color: theme.palette.text.primary,
                        boxShadow: 'none',
                        textTransform: 'uppercase',
                        borderRadius: 6,
                      }}
                    >
                      Join Now
                    </Button>
                  </Link>
                </MenuItem>
              </>
            ) : (
              <>
                {userNavigation?.map(item => (
                  <MenuItem
                    key={uuidv()}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={item.to}
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      textWrap: 'nowrap',
                      color: 'primary.main',
                      borderColor: 'black',
                      borderBottom: 1,
                    }}
                  >
                    <ListItemIcon sx={{ color: 'primary.main' }}>
                      {item.icon}
                    </ListItemIcon>
                    {item.name}
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={logoutHandler}
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    color: 'primary.main',
                    borderColor: 'black',
                  }}
                >
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  Sign out
                </MenuItem>
              </>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
