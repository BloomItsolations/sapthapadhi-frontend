import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { useScrollToTop } from './hooks/use-scroll-to-top';
//app layout
import HomeLayout from './layouts/home/index';
import DashboardLayout from './layouts/dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import UnProtectedRoute from './routes/UnProtectedRoute';
import About from './pages/home/About';
import Pricing from './pages/home/Pricing';
import Contact from './pages/home/Contact';
import Gallery from './pages/home/Gallery';
import Services from './pages/home/Services';

const RegisterPage = lazy(() => import('./pages/auth/Register'));
const LoginPage = lazy(() => import('./pages/auth/login'));
const Page404 = lazy(() => import('./pages/page-not-found'));
// home
const Home = lazy(() => import('./pages/home'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
// dashboad
const Matches = lazy(() => import('./pages/dashbaord/Matches'));
const IndexPage = lazy(() => import('./pages/dashbaord/app'));
const Plan = lazy(() => import('./pages/dashbaord/plan'));
const Chats = lazy(() => import('./pages/dashbaord/Chats'));
// --------------------------------------------------------
const Preferences = lazy(() => import('./pages/dashbaord/Preferences'));
const Setting = lazy(() => import('./pages/dashbaord/Setting'));
export default function App() {
  useScrollToTop();
  const { authInfo } = useSelector(state => state.auth);

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

          <Route path="updatePassword" element={<ForgotPassword />} />
          <Route path="terms_and_conditions" element={<TermsConditions />} />
          <Route path="privacy_and_policy" element={<PrivacyPolicy />} />
        </Route>
        <Route
          path="/app/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {authInfo !== null ? (
            <>
              <Route path={'dashboard/'} element={<IndexPage />}>
                <Route path="preferences" element={<Preferences />} />
                <Route path="Setting" element={<Setting />} />
              </Route>
              <Route path={'matches'} element={<Matches />} />
              <Route path={'plans'} element={<Plan />} />
              <Route path={'chat'} element={<Chats />} />
            </>
          ) : null}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
