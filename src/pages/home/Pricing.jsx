import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { textGradient } from "../../theme/css";
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
import { CheckCircle, Cancel } from "@mui/icons-material";

const Pricing = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllPlans());
    return () => {};
  }, [dispatch]);

  const { planList } = useSelector((state) => state.plan);

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
                    title={item.name}
                    color={theme.palette.primary.main}
                    titleTypographyProps={{ align: "center" }}
                  />
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
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography variant="h2" color="text.primary">
                        &#x20b9;{item.amount}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        /&nbsp;{item.planValidity}
                      </Typography>
                    </Box>
                    <ul>
                      {item.features
                        ? item.features.map((detail) => (
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "start",
                                gap: 1,
                              }}
                            >
                              <Typography>
                                {detail.value ? (
                                  <CheckCircle
                                    sx={{
                                      color: (theme) =>
                                        theme.palette.success.main,
                                    }}
                                  />
                                ) : (
                                  <Cancel
                                    sx={{
                                      color: (theme) =>
                                        theme.palette.error.main,
                                    }}
                                  />
                                )}
                              </Typography>
                              <Typography
                                component="li"
                                variant="body2"
                                align="left"
                                key={detail}
                                sx={{
                                  color: theme.palette.text.secondary,
                                  textTransform: "capitalize",
                                }}
                              >
                                {detail.desc}
                              </Typography>
                            </Box>
                          ))
                        : ""}
                    </ul>
                  </CardContent>
                  <CardActions sx={{ p: 2, placeSelf: "center" }}>
                    <Button
                      component="a"
                      href={`/app/plans/${item?.name}`}
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
