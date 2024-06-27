import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import Logo from "../../components/logo";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import {
  Box,
  Card,
  Stack,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";

import { useRouter } from "../../routes/hooks";

import { bgGradient } from "../../theme/css";

import Iconify from "../../components/iconify";

import { userLogin, clearError } from "../../store/authSlice";
import Swal from "sweetalert2";

export default function LoginPage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const location = useLocation();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  // Access the auth state from the Redux store
  const { loading, error, success } = useSelector((state) => state.auth);
  let redirectPath = location.state?.from?.pathname || "/app/dashboard";
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(clearError());
      dispatch(userLogin(values))
        .then((res) => {
          if (!res.error) {
            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Login Successful",
            });
            router.push(redirectPath);
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
          console.error("Login failed:", err);
        });
    },
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      <Helmet>
        <title> Login | My welth help solution </title>
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
          padding: 1,
          margin: 0,
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ height: 1, width: 1 }}
        >
          <Card
            sx={{
              p: 4,
              width: 1,
              maxWidth: 400,
              textAlign: "center",
            }}
          >
            <Logo />
            <Typography
              variant="h4"
              paddingY={1}
              textAlign={"center"}
              sx={{ color: (theme) => theme.palette.primary.main }}
            >
              Sign in to My welth help solution
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography variant="body2" textAlign="center">
                Don’t have an account?{" "}
              </Typography>
              <Link to="/register" variant="subtitle2" className="text-red-600">
                Get started.
              </Link>
            </Box>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3} marginY={4}>
                <TextField
                  InputLabelProps={{ shrink: true }}
                  name="phone"
                  sx={{
                    input: { color: theme.palette.text.primary },
                    color: theme.palette.text.primary,
                  }}
                  label={isMobile ? "" : "Mobile number"}
                  placeholder="Mobile Number"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />

                <TextField
                  InputLabelProps={{ shrink: true }}
                  name="password"
                  label={isMobile ? "" : "Password"}
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  sx={{
                    input: { color: theme.palette.text.primary },
                    color: theme.palette.text.primary,
                  }}
                  onBlur={handleBlur}
                  autoComplete="current-password"
                  type={showPassword ? "Text" : "password"}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          <Iconify
                            icon={
                              showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>

              <Button
                sx={{
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.primary.main,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.main,
                  },
                }}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="inherit"
                disabled={loading}
              >
                {loading ? "loading ..." : "Login"}
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                sx={{ my: 2 }}
              >
                <Link
                  to="/updatePassword"
                  variant="subtitle2"
                  underline="hover"
                >
                  Forgot password?
                </Link>
              </Stack>
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
    </>
  );
}
