import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { alpha } from "@mui/material/styles";
import { Box, Stack, Drawer, Typography, ListItemButton } from "@mui/material";

import { appRoutes } from "../../routes/config";
import { usePathname } from "../../routes/hooks";
import { RouterLink } from "../../routes/components";

import { useResponsive } from "../../hooks/use-responsive";

import Scrollbar from "../../components/scrollbar";

import { NAV } from "./config-layout";

const Nav = ({ openNav, onCloseNav }) => {
  const { authInfo } = useSelector((state) => state.auth);
  const pathname = usePathname();
  const upLg = useResponsive("up", "lg");
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        borderRadius: 1.5,
        alignItems: "start",
        bgcolor: (theme) => alpha(theme.palette.grey[50], 1),
      }}
    >
      <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
        {authInfo.name}
      </Typography>
      <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
        {authInfo.name}
      </Typography>
      <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
        {authInfo.name}
      </Typography>
      <Typography variant="h6">{authInfo?.phone}</Typography>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {appRoutes?.map((item) => {
        return (
          <NavItem
            key={item.title}
            item={item}
            active={"/app/" + item.path === pathname || item.path === pathname}
          />
        );
      })}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );
  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            borderRight: (theme) =>
              `dashed 1px ${theme.palette.secondary.main}`,
            backgroundColor: (theme) => theme.palette.background.paper,
            zIndex: 100,
          }}
        >
          {renderContent}
        </Box>
      ) : (
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
      )}
    </Box>
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
      borderRadius: 0.75,
      typography: "body2",
      textTransform: "capitalize",
      fontWeight: active ? "fontWeightSemiBold" : "fontWeightMedium",
      color: active ? "#ffffff" : "text.secondary",
      backgroundColor: active ? "#5e17eb" : "transparent",
      "&:hover": {
        backgroundColor: active ? "#5e17eb" : "transparent",
      },
    }}
  >
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mr: 2,
        color: active ? "#ffffff" : "#ffffff",
      }}
    >
      {item.icon}
    </Box>
    <Box component="span">{item.title}</Box>
  </ListItemButton>
);

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.bool,
};

export default Nav;
