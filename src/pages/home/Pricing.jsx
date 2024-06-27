import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { textGradient } from "../../theme/css";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  Button,
  Container,
  Typography,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  useTheme,
} from "@mui/material";
import { listAllPlans } from "../../store/planSlice.js";

const Pricing = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllPlans());
    return () => {};
  }, [dispatch]);

  const { planList } = useSelector((state) => state.plan);

  console.log(planList !== null && planList);

  return (
    <Box sx={{ py: 8, bgcolor: "#f6f8fb" }}>
      <Container disableGutters maxWidth="sm" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          sx={{ ...textGradient() }}
          gutterBottom
        >
          Pricing Plans, for everyone
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default MUI components with
          little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container disableGutters sx={{ pt: 8, pb: 6 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {planList !== null &&
            planList?.map((item) => (
              <Grid item key={item.id} xs={12} sm={3}>
                <Card>
                  <CardHeader
                    title={item.planName}
                    color={theme.palette.primary.main}
                    titleTypographyProps={{ align: "center" }}
                  />
                  {console.log(item)}
                  <Divider
                    sx={{
                      margin: "8px 0",
                      color: "primary",
                      border: "none",
                      backgroundColor: theme.palette.text.disabled,
                      height: "1px",
                      width: "100%",
                    }}
                  ></Divider>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h6" color="text.primary">
                        &#x20b9; {item.price / 100}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {item.features
                        ? item.features.map((detail) => (
                            <Typography
                              component="li"
                              variant="body2"
                              align="left"
                              key={detail}
                            >
                              {detail.desc}
                            </Typography>
                          ))
                        : ""}
                    </ul>
                  </CardContent>
                  <CardActions sx={{ p: 2 }}>
                    <Link to="/app/accounts/Billing">
                      <Button
                        color="secondary"
                        variant="contained"
                        size="medium"
                        fullWidth
                        sx={{
                          color: theme.palette.text.info,
                          boxShadow: "none",
                          textTransform: "uppercase",
                          borderRadius: 6,
                        }}
                      >
                        GET Started
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default Pricing;
