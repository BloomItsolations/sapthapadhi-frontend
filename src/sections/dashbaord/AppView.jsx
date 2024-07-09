import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { matchesUser, recUsers } from "../../store/userSlice";
import { Container, Grid, Typography } from "@mui/material";
// ------------------------------------------------------

const AppView = () => {
  const dispatch = useDispatch();

  const { authInfo } = useSelector((state) => state.auth);

  const { matchUser, recUsersList } = useSelector((state) => state.user);
  console.log(matchUser);
  console.log(recUsersList);
  useEffect(() => {
    dispatch(recUsers());
    dispatch(matchesUser());
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
