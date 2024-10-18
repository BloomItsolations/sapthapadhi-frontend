import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Card,
  Grid,
  Divider,
  Container,
  Typography,
  useTheme,
  CardHeader,
  Button,
  CardContent,
  CardActions,
} from '@mui/material';
import { listAllPlans } from '../store/planSlice';
import RestApi from '../api/RestApi';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// rozarpay
function loadScript(src) {
  return new Promise(resolve => {
    const script = document.createElement('script');
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
  const navigate=useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAllPlans());
    return () => {};
  }, [dispatch]);

  const { planList } = useSelector(state => state.plan);
  const { authInfo } = useSelector(state => state.auth);
  //razorpay
   
   console.log("PlanList",planList);

  const displayRazorpay = async (e, item) => {
    if(!authInfo){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Please Login First",
      });
      navigate('/login');
      return;
    }
    e.preventDefault();

    try {
      const response = await RestApi.post(
        `/app/CreateOrder`,
        { planId: item.id },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authInfo?.token}`,
          },
        },
      );
      if (response.status === 200) {
      }
    } catch (error) {
      console.log(error.response.data.message);
    }

    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js',
    );
    if (!res) {
      console.log('Payment gateway failed to load !');
      return;
    }
    const options = {
      key: 'rzp_test_wiEoVPHYx1DrGq',
      currency: 'INR',
      handler: function (response) {
        try {
          RestApi.post(
            `app/buyPlan`,
            {
              planId: item.id,
              paidAmount: item?.amount,
              paymentdetails: {
                paymentId: response?.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
                paymentStatus: response.razorpay_payment_status || 'Success',
              },
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authInfo.token}`,
              },
            },
          ).then(res => {
            if (res.status === 201) {
              localStorage.setItem("myplan", JSON.stringify(item));
              Swal.fire({
                icon: 'success',
                title: 'Congratulations!',
                text: 'Plan Purchase Successful',
              });
            } else {
              console.log(res?.data?.msg);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Something went wrong..",
              });
            }
          });
        } catch (error) {
          console.log(error?.response?.data?.message);
        }
      },
      prefill: {
        name: authInfo?.name,
        email: authInfo?.email,
        contact: authInfo?.phone,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on('payment.failed', function (response) {});
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        boxShadow: '2px',
      }}
    >
      <Container disableGutters sx={{ pt: 8, pb: 6 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {planList !== null &&
            planList?.map(item => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title={item.name}
                    color={theme.palette.primary.main}
                    titleTypographyProps={{ align: 'center' }}
                  />
                  <Divider
                    sx={{
                      margin: '8px 0',
                      color: 'primary',
                      border: 'none',
                      backgroundColor: theme.palette.text.disabled,
                      height: '1px',
                      width: '100%',
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
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
                        ? item?.features?.map(detail => (
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'start',
                                gap: 1,
                              }}
                            >
                              <Typography>
                                {detail.value ? (
                                  <CheckCircle
                                    sx={{
                                      color: theme =>
                                        theme.palette.success.main,
                                    }}
                                  />
                                ) : (
                                  <Cancel
                                    sx={{
                                      color: theme => theme.palette.error.main,
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
                                  textTransform: 'capitalize',
                                }}
                              >
                                {detail.desc}
                              </Typography>
                            </Box>
                          ))
                        : ''}
                    </ul>
                  </CardContent>
                  <CardActions sx={{ p: 2, placeSelf: 'center' }}>
                    <Button
                      color="secondary"
                      variant="contained"
                      size="medium"
                      fullWidth
                      onClick={e => displayRazorpay(e, item)}
                      sx={{
                        color: theme.palette.text.info,
                        boxShadow: 'none',
                        textTransform: 'uppercase',
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

export default Plan;
