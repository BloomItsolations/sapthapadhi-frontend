import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  Grid,
  Button,
  Divider,
  Typography,
  CardActions,
  useTheme,
  CardHeader,
  CardContent,
} from "@mui/material";
import { listAllPlans } from "../../store/planSlice";
import RestApi from "../../api/RestApi";
import { CheckCircle, Cancel } from "@mui/icons-material";
// rozarpay
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Plan = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllPlans());
    return () => {};
  }, [dispatch]);

  const { planList } = useSelector((state) => state.plan);
  const { userInfo } = useSelector((state) => state.auth);
  console.log(planList);
  //razorpay
  const displayRazorpay = async (e, planId) => {
    e.preventDefault();

    try {
      const response = await RestApi.post(
        `/buySubscription`,
        { planId, total_count: 1 },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo?.token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      console.log("Payment gateway failed to load !");
      return;
    }
    const options = {
      key: "rzp_live_a0DI9dbvDLyCop",
      currency: "INR",
      handler: function (response) {
        try {
          RestApi.post(
            `/app/place-order`,
            {
              userName: userInfo.name,
              userEmail: userInfo.email,
              userPhone: userInfo.phone,
              shippingAddress: userInfo.address,
              paymentResult: response,
              razorpay: {
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
              },
              paymentStatus: response.razorpay_payment_status || "Success",
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`,
              },
            }
          ).then((res) => {
            if (res.status === 201) {
              console.log(res.data.msg);
            } else {
              console.log(res.data.msg);
            }
          });
        } catch (error) {
          console.log(error.response.data.message);
        }
      },
      prefill: {
        name: userInfo?.name,
        email: userInfo?.email,
        contact: userInfo?.phone,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {});
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        boxShadow: "2px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {planList !== null ??
          planList?.map(({ item }) => (
            <Grid item key={item.id} xs={12} sm={3}>
              <Card>
                <CardHeader
                  title={item?.name}
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
                {/* <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography variant="h2" color="text.primary">
                      &#x20b9; {item?.amount}&nbsp;
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /&nbsp;{item?.planValidity}
                    </Typography>
                  </Box>
                  <ul>
                    {item?.features
                      ? item?.features.map((detail) => (
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
                                    color: (theme) => theme.palette.error.main,
                                  }}
                                />
                              )}
                            </Typography>
                            <Typography
                              component="li"
                              variant="body1"
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
                <CardActions sx={{ p: 2 }}>
                  <Button
                    color="primary"
                    variant="contained"
                    size="medium"
                    fullWidth
                    onClick={(e) => displayRazorpay(e, item.id)}
                    sx={{
                      color: theme.palette.text.info,
                      boxShadow: "none",
                      textTransform: "uppercase",
                      borderRadius: 6,
                    }}
                  >
                    Subscribe
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Plan;
