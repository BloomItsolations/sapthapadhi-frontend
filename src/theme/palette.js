import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: '#ffffff',
  100: '#f9fafb',
  200: '#f4f6f8',
  300: '#dfe3e8',
  400: '#c4cdd5',
  500: '#919eab',
  600: '#637381',
  700: '#454f5b',
  800: '#212b36',
  900: '#161c24',
};

export const black = {
  1: '#000000',
  2: '#050917',
  3: '#0f0f0f',
};

export const white = {
  1: '#ffffff',
  2: 'rgba(255,255,255,.25)',
  3: '#f6f8fb',
};
export const primary = {
  main: '#1179fc',
  light: '#4093FC',
  dark: '#0B54B0',
};

export const secondary = {
  main: '#dc82fc',
  light: '#E39BFC',
  dark: '#9a5bb0',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  light: '#5be49b',
  main: '#00a76f',
  dark: '#007867',
};

export const warning = {
  light: '#ffd666',
  main: '#ffab00',
  dark: '#b76e00',
};

export const error = {
  light: '#ffac82',
  main: '#ff5630',
  dark: '#b71d18',
};

export const common = {
  black: '#000000',
  white: '#ffffff',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: '#000000',
      secondary: '#000000',
      info: '#ffffff',
      disabled: 'rgba(0,0,0,0.5)',
      hover: '#dc82fc',
    },
    background: {
      paper: 'rgba(255,255,255,1)',
      dark: '#000000',
      default: '#f6f8fb',
      hover: '#dc82fc',
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };
}
