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
      <Grid container spacing={1} marginY={4}>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="TOTAL HELP RECEIVED"
            total="RS 1"
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/payment.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="TOTAL SENT HELP"
            total="RS 1"
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/parachute.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="TOTAL DOWNLINE"
            total={downline && downline.length}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/group.png" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="SPONSORED TEAM"
            total={upline && upline?.length}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/handshake.png" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="ACTIVE TEAM"
            total={upline && upline?.length}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/partners.png" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="IN-ACTIVE TEAM"
            total="0"
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/hibernation.png" />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Wallet Balance"
            total={authInfo?.walletBalance}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/hibernation.png" />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
export default AppView;
