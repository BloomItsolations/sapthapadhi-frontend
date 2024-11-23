import PropTypes from 'prop-types';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { useResponsive } from '../../hooks/use-responsive';
import { appRoutes } from '../../routes/config';
import { usePathname } from '../../routes/hooks';
import { RouterLink } from '../../routes/components';
import Logo from '../../components/logo';
import { bgBlur } from '../../theme/css';
import Iconify from '../../components/iconify';
import { HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import NotificationsPopover from './common/notifications-popover';
// ---------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();
  const pathname = usePathname();
  const lgUp = useResponsive('up', 'md');
  const renderMenu = (
    <Box
      sx={{
        px: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {appRoutes?.map(item => {
        return (
          <NavItem
            key={item.title}
            item={item}
            active={'/app/' + item.path === pathname || item.path === pathname}
          />
        );
      })}
    </Box>
  );

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" color="primary.main" sx={{fontSize:'3rem'}}  />
        </IconButton>
      )}
      <Box>
        <Logo />
      </Box>
      <Box sx={{ flexGrow: 1 }}>{lgUp && renderMenu}</Box>
      <Stack direction="row" alignItems="center" spacing={1}>
        {/* <NotificationsPopover /> */}
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: '0 4px 4px #00000029',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 2,
        ...bgBlur({
          color: theme.palette.background.paper,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: '100%',
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
          justifyContent: 'space-between',
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
const NavItem = ({ item, active }) => (
  <Box
    component={RouterLink}
    href={item.path}
    sx={{
      minHeight: 44,
      paddingY: 1,
      borderRadius: 0.75,
      typography: 'body2',
      textTransform: 'capitalize',
      fontWeight: active ? 'fontWeightSemiBold' : 'fontWeightMedium',
      color: active ? 'primary.main' : 'text.secondary',
      backgroundColor: 'transparent',
      '&:hover': {
        color: active ? 'primary.main' : 'transparent',
      },
      px: 2,
      gap: 0.5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        color: active ? 'primary.main' : '#000000',
      }}
    >
      {item.icon}
    </Box>
    <Box
      component="span"
      sx={{
        color: active ? 'primary.main' : '#000000',
      }}
    >
      {item.title}
    </Box>
  </Box>
);
NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
};
Header.propTypes = {
  onOpenNav: PropTypes.func,
};
