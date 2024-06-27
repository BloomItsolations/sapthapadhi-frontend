import { lazy } from "react";
import { v4 as uuidv } from "uuid";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { appRoutes } from "./routes/config";

import { useScrollToTop } from "./hooks/use-scroll-to-top";
//app layout
import HomeLayout from "./layouts/home/index";
import DashboardLayout from "./layouts/dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import UnProtectedRoute from "./routes/UnProtectedRoute";
import About from "./pages/home/About";
import Pricing from "./pages/home/Pricing";
import Contact from "./pages/home/Contact";
import Gallery from "./pages/home/Gallery";
import Services from "./pages/home/Services";

const RegisterPage = lazy(() => import("./pages/auth/Register"));
const LoginPage = lazy(() => import("./pages/auth/login"));
const Page404 = lazy(() => import("./pages/page-not-found"));
// home
const Home = lazy(() => import("./pages/home"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));

// --------------------------------------------------------

export default function App() {
  useScrollToTop();
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="login" element={<LoginPage />} />
          <Route
            path="register"
            element={
              <UnProtectedRoute>
                <RegisterPage />
              </UnProtectedRoute>
            }
          />
          <Route
            path="register/:referralKey"
            element={
              <UnProtectedRoute>
                <RegisterPage />
              </UnProtectedRoute>
            }
          />
          <Route path="updatePassword" element={<ForgotPassword />} />
          <Route path="terms_and_conditions" element={<TermsConditions />} />
          <Route path="privacy_and_policy" element={<PrivacyPolicy />} />
        </Route>
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {userInfo !== null
            ? appRoutes?.map((route) => (
                <Route
                  key={uuidv()}
                  path={route.path}
                  element={route.element}
                />
              ))
            : null}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
