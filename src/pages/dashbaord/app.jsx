import { Helmet } from "react-helmet-async";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { matchesUser, recUsers } from "../../store/userSlice";
import {
  Card,
  Container,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import SliderContainer from "../../components/Slider";
// ----------------------------------------------------------------------

export default function AppPage() {
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
    <>
      <Helmet>
        <title> Dashboard | sapthapadhi </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5, textTransform: "capitalize" }}>
          Hi, Welcome back {authInfo.name}👋
        </Typography>
        <Grid container spacing={1} marginY={4}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Your Matches
            </Typography>
            <SliderContainer>
              {matchUser !== null ? (
                matchUser?.map((user) => (
                  <Card sx={{ maxWidth: 345 }} key={user.id}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={user.profilePic}
                      alt={user.name}
                      title={user.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.age}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                ))
              ) : (
                <div>No Recommended Users</div>
              )}
            </SliderContainer>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Recommended Users
            </Typography>
            <SliderContainer>
              {recUsersList !== null ? (
                recUsersList?.map((user) => (
                  <Card sx={{ maxWidth: 345 }} key={user.id}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={user.profilePic}
                      alt={user.name}
                      title={user.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.age}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                ))
              ) : (
                <div>No Recommended Users</div>
              )}
            </SliderContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
