import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { useResponsive } from '../../hooks/use-responsive';

import { HEADER } from './config-layout';

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }) {
  const lgUp = useResponsive('up', 'md');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: `${HEADER.H_MOBILE + SPACING}px`,
        px: 2,
        ...(lgUp && {
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `100%`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
