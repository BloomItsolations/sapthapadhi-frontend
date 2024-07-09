import React, { useEffect } from "react";

import AppWidgetSummary from "./app-widget-summary";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../store/userSlice";
import { Container, Grid, Typography } from "@mui/material";
// ------------------------------------------------------

const AppView = () => {
  const dispatch = useDispatch();

  const { upline, downline } = useSelector((state) => state.user);
  const { authInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchAllUsers());
    return () => {};
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5, textTransform: "capitalize" }}>
        Hi, Welcome back {authInfo.name}👋
      </Typography>
      <Grid container spacing={1} marginY={4}></Grid>
    </Container>
  );
};
export default AppView;
