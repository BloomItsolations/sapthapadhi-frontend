import { v4 as uuidv } from "uuid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
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
} from "@mui/material";

import { useResponsive } from "../../hooks/use-responsive";

import Logo from "../../components/logo/logo";

import { HEADER } from "../dashboard/config-layout";

const pages = [
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Plans", to: "/pricing" },
  { name: "Gallary", to: "/gallery" },
  { name: "Contact", to: "/contact" },
];

const Header = () => {
  const lgUp = useResponsive("up", "lg");
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      component="nav"
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        backgroundImage: "none",
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        transition: theme.transitions.create(["height"], {
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
            display: { xs: "none", md: "flex" },
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {pages.map((page) => (
            <Link key={uuidv()} to={page.to}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  fontWeight: 500,
                  mx: 2,
                  color: theme.palette.text.primary,
                  "&:hover": {
                    color: theme.palette.text.hover,
                  },
                }}
              >
                {page.name}
              </Typography>
            </Link>
          ))}
          <Link to="/login">
            <Button
              color="secondary"
              variant="outlined"
              size="medium"
              sx={{
                color: theme.palette.text.primary,
                boxShadow: "none",
                borderRadius: 6,
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
                color: theme.palette.text.primary,
                boxShadow: "none",
                textTransform: "uppercase",
                borderRadius: 6,
              }}
            >
              GET Started
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              width: "100%",
            }}
          >
            {pages.map((page) => (
              <MenuItem key={uuidv()}>
                <Link to={page.to}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      mx: 2,
                      color: theme.palette.text.primary,
                      "&:hover": {
                        color: theme.palette.text.hover,
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </Link>
              </MenuItem>
            ))}
            <MenuItem>
              <Link to="/login">
                <Button
                  color="secondary"
                  variant="outlined"
                  size="medium"
                  fullWidth
                  sx={{
                    color: theme.palette.text.primary,
                    boxShadow: "none",
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
                    boxShadow: "none",
                    textTransform: "uppercase",
                    borderRadius: 6,
                  }}
                >
                  GET Started
                </Button>
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
