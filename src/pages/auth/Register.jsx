import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Logo from "../../components/logo";
import { alpha, useTheme } from "@mui/material/styles";
import Swal from "sweetalert2";
import {
  Box,
  Card,
  Stack,
  TextField,
  Typography,
  IconButton,
  CircularProgress,
  Grid,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useRouter } from "../../routes/hooks";
import { useMediaQuery } from "@mui/material";

import { bgGradient } from "../../theme/css";

import { clearError, userRegister } from "../../store/authSlice";
import { Close } from "@mui/icons-material";

export default function RegisterPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const router = useRouter();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [user, setUser] = useState(null);

  // For Dialog
  const [open, setOpen] = useState(false);
  // Access the auth state from the Redux store
  const { loading, error, success } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      referralKey: "",
      proposerKey: "",
      name: "",
      phone: "",
      email: "",
      paymentDetails: {
        phonepay: "",
        googlePaly: "",
        paytm: "",
      },
    },

    validationSchema: Yup.object({
      referralKey: Yup.string().required("SponsorId is required"),
      proposerKey: Yup.string().required("proposerId is required"),
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address"),
      phone: Yup.string()
        .required("Phone is required")
        .matches(
          /^[6-9]\d{9}$/,
          "Phone number must be exactly 10 digits and start with 6, 7, 8, or 9"
        ),
      paymentDetails: Yup.object().shape({
        phonepay: Yup.string().required(" Phone pe number is required"),
        googlePaly: Yup.string().required("google pe number is required"),
        paytm: Yup.string().required("paytm number is required"),
      }),
    }),

    onSubmit: (values) => {
      dispatch(clearError());
      dispatch(userRegister(values))
        .then((res) => {
          if (!res.error) {
            setUser(res.payload.user);
            openDialog();
            dispatch(clearError());
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: res.payload,
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "error occured while registering user. Please try again later.",
          });
        });
    },
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;

  const handleTermsChange = () => {
    setAgreedToTerms(agreedToTerms);
  };

  const isMobile = useMediaQuery("(max-width:768px)");

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
    router.push("/login");
  };

  return (
    <>
      <Helmet>
        <title> Register | sapthapadhi </title>
      </Helmet>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: "/assets/background/overlay_4.jpg",
          }),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingY: 16,
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ width: 1, height: 1 }}
        >
          <Card
            sx={{
              p: 4,
              width: 1,
              maxWidth: 750,
            }}
          >
            <Box sx={{ textAlign: "center", margin: 0, padding: 0 }}>
              <Logo />
            </Box>

            <Typography
              variant="h4"
              paddingY={1}
              textAlign={"center"}
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              Register Yourself to sapthapadhi
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                py: 1,
              }}
            >
              <Typography variant="body2" textAlign="center">
                Already have an Account?{" "}
              </Typography>
              <Link to="/login" variant="subtitle2" className="text-red-600">
                Login here.
              </Link>
            </Box>
            <Box component="form" sx={{ py: 2 }} onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    name="referralKey"
                    label={isMobile ? "" : "Sponsor ID (First Upline User)"}
                    placeholder={
                      isMobile ? "Sponsor ID (First Upline User)" : ""
                    }
                    autoComplete="current-sponsor-id"
                    value={values.referralKey}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.referralKey && Boolean(errors.referralKey)}
                    helperText={touched.referralKey && errors.referralKey}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    name="proposerKey"
                    label={isMobile ? "" : "Proposer ID"}
                    placeholder={isMobile ? "Proposer ID" : ""}
                    autoComplete="current-proposer-id"
                    value={values.proposerKey}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.proposerKey && Boolean(errors.proposerKey)}
                    helperText={touched.proposerKey && errors.proposerKey}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    name="name"
                    label={isMobile ? "" : "Your Name"}
                    placeholder={isMobile ? "Your Name" : ""}
                    autoComplete="current-name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    name="email"
                    label={isMobile ? "" : "Email"}
                    placeholder={isMobile ? "Email" : ""}
                    autoComplete="current-email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    name="phone"
                    label={isMobile ? "" : "Mobile Number"}
                    placeholder={isMobile ? "Mobile Number" : ""}
                    autoComplete="current-mobile-number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>

                {/* paymentDetails Fields */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    name="paymentDetails.phonepay"
                    label={isMobile ? "" : "PhonePe Number"}
                    placeholder={isMobile ? "PhonePe Number" : ""}
                    autoComplete="tel"
                    value={values.paymentDetails.phonepay}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.paymentDetails &&
                      touched.paymentDetails.phonepay &&
                      Boolean(errors.paymentDetails?.phonepay)
                    }
                    helperText={
                      touched.paymentDetails &&
                      touched.paymentDetails.phonepay &&
                      errors.paymentDetails?.phonepay
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    name="paymentDetails.googlePaly"
                    label={isMobile ? "" : "GooglePe Number"}
                    placeholder={isMobile ? "GooglePe Number" : ""}
                    autoComplete="tel"
                    value={values.paymentDetails.googlePaly}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.paymentDetails &&
                      touched.paymentDetails.googlePaly &&
                      Boolean(errors.paymentDetails?.googlePaly)
                    }
                    helperText={
                      touched.paymentDetails &&
                      touched.paymentDetails.googlePaly &&
                      errors.paymentDetails?.googlePaly
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    name="paymentDetails.paytm"
                    label={isMobile ? "" : "Paytm Number"}
                    placeholder={isMobile ? "Paytm Number" : ""}
                    autoComplete="tel"
                    value={values.paymentDetails.paytm}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.paymentDetails &&
                      touched.paymentDetails.paytm &&
                      Boolean(errors.paymentDetails?.paytm)
                    }
                    helperText={
                      touched.paymentDetails &&
                      touched.paymentDetails.paytm &&
                      errors.paymentDetails?.paytm
                    }
                  />
                </Grid>
              </Grid>

              {/* Checkbox and Submit Button */}
              <Grid item xs={8}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={handleTermsChange}
                      defaultChecked={agreedToTerms}
                    />
                  }
                  label="I agree to the terms and conditions"
                />
              </Grid>

              <Box marginTop={3}>
                {loading ? (
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="inherit"
                    loading={loading}
                    loadingPosition="start"
                    sx={{ backgroundColor: "#5e17eb" }}
                    startIcon={<CircularProgress size={20} />}
                  >
                    Submitting...
                  </LoadingButton>
                ) : (
                  <LoadingButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="inherit"
                    sx={{
                      backgroundColor: "#5e17eb",
                      "&:hover": {
                        backgroundColor: "#5e17eb", // specify the hover background color here
                      },
                    }}
                  >
                    Register
                  </LoadingButton>
                )}
              </Box>
            </Box>

            {error ? (
              <Typography
                variant="body1"
                color="error"
                sx={{ my: 2 }}
                textAlign="center"
              >
                Error : {error}
              </Typography>
            ) : success ? (
              <Typography
                variant="body1"
                color="primary"
                sx={{ my: 2 }}
                textAlign="center"
              >
                {success}.
              </Typography>
            ) : null}
          </Card>
        </Stack>
      </Box>

      {/* Model */}

      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>
          <Box sx={{ py: 4, display: "flex", justifyContent: "space-between" }}>
            {/* <Logo /> */}
            <IconButton onClick={closeDialog}>
              <Close sx={{ color: "red" }} />
            </IconButton>
          </Box>
          Welcome to the sapthapadhi Family!
        </DialogTitle>
        <DialogContent sx={{ width: "600px", height: "200px" }}>
          <Box>
            <Typography variant="h6">
              Your successful registration details:
            </Typography>

            <Typography>
              Customer Registration Number: <strong>{values.phone}</strong>{" "}
            </Typography>
            <Typography>
              Customer Registration Name: <strong>{values.name}</strong>{" "}
            </Typography>
            {user && (
              <Box>
                <Typography>
                  Your UserId is: <strong>{user.phone}</strong>{" "}
                </Typography>
                <Typography>
                  Your Password is: <strong>{user.password}</strong>{" "}
                </Typography>
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
