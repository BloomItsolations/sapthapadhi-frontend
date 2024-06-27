import { Outlet } from "react-router-dom";

import { Box, useTheme } from "@mui/material";

import Footer from "./Footer";
import Header from "./header"; // Import useTheme hook to access theme
import Main from "./main";

const HomeLayout = () => {
  const theme = useTheme(); // Accessing the theme

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "auto",
        minHeight: "100vh",
        bgcolor: theme.palette.common.default,
        color: theme.palette.text.info, // Using primary text color from theme
      }}
    >
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Box>
  );
};

export default HomeLayout;
