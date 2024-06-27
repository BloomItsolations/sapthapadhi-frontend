import PropTypes from "prop-types";

import Box from "@mui/material/Box";

import { HEADER } from "../dashboard/config-layout";

// ----------------------------------------------------------------------

export default function Main({ children }) {
  return (
    <Box
      component="main"
      sx={{
        py: `${HEADER.H_DESKTOP}px`,
      }}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};
