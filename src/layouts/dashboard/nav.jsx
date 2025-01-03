import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { alpha } from '@mui/material/styles';
import { Box, Stack, Drawer, Typography, ListItemButton } from '@mui/material';
import Logo from '../../components/logo';
import { appRoutes } from '../../routes/config';
import { usePathname } from '../../routes/hooks';
import { RouterLink } from '../../routes/components';

import { useResponsive } from '../../hooks/use-responsive';

import Scrollbar from '../../components/scrollbar';

import { NAV } from './config-layout';

const Nav = ({ openNav, onCloseNav }) => {
  const { authInfo } = useSelector(state => state.auth);
  const pathname = usePathname();
  const upLg = useResponsive('up', 'md');
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        borderRadius: 1.5,
        alignItems: 'start',
        bgcolor: theme => alpha(theme.palette.grey[50], 1),
      }}
    >
      <Typography
        variant="h6"
        sx={{ textTransform: 'capitalize', color: 'primary.main' }}
      >
        {authInfo.name}
      </Typography>

      <Typography variant="body1" sx={{ color: 'primary.main' }}>
        {authInfo?.phone}
        
      </Typography>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {appRoutes?.map(item => {
        return (
          <NavItem
            key={item.title}
            item={item}
            active={'/app/' + item.path === pathname || item.path === pathname}
          />
        );
      })}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 56,
          py: 6,
          px: 2,
        }}
      >
        <Logo width={100} />
      </Box>

      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );
  return (
    <>
      {!upLg && (
        <Box
          sx={{
            flexShrink: { lg: 0 },
            width: { lg: NAV.WIDTH },
          }}
        >
          <Drawer
            open={openNav}
            onClose={onCloseNav}
            PaperProps={{
              sx: {
                width: NAV.WIDTH,
              },
            }}
          >
            {renderContent}
          </Drawer>
        </Box>
      )}
    </>
  );
};

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

const NavItem = ({ item, active }) => (
  <ListItemButton
    component={RouterLink}
    href={item.path}
    sx={{
      minHeight: 44,
      paddingY: 1,
      borderRadius: 0.75,
      typography: 'body2',
      textTransform: 'capitalize',
      fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
      color: active ? 'text.primary' : 'text.secondary',
      backgroundColor: active ? 'primary.main' : 'transparent',
      '&:hover': {
        backgroundColor: active ? 'primary.main' : 'transparent',
      },
    }}
  >
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mr: 2,
        color: active ? '#ffffff' : '#000000',
      }}
    >
      {item.icon}
    </Box>
    <Box
      component="span"
      sx={{
        color: active ? '#ffffff' : '#000000',
      }}
    >
      {item.title}
    </Box>
  </ListItemButton>
);

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
};

export default Nav;
