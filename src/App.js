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
import ServiceEnquaryPage from './pages/ServiceEnquaryPage';
import UserDetailsPage from './pages/UserDetailsPage';
import NewRequestUserDetails from './pages/userdetails/NewRequestUserDetails';
import ChatPage from './pages/chat/ChatPage';
import UserProfile from './pages/userdetails/UserProfile';
import ViewNewProfile from './pages/userdetails/ViewNewProfile';
import AcceptedUserDetail from './pages/userdetails/AcceptedUserDetail';
import RequestSendedProfileView from './pages/userdetails/RequestSendedProfileView';
import UserValidateRoute from './routes/UserValidateRoute';
import CollectUserData from './pages/CollectUserData';
import UserProfilePage from './components/UserProfilePage';
import GalleryImage from './components/home/Gallery';

const RegisterPage = lazy(() => import('./pages/auth/Register'));
const LoginPage = lazy(() => import('./pages/auth/login'));
const Page404 = lazy(() => import('./pages/page-not-found'));
// home
const Home = lazy(() => import('./pages/home'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const ForgotPassword = lazy(() => import('./pages/auth/ForgotPassword'));
// dashboad
const Matches = lazy(() => import('./pages/Matches'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Plan = lazy(() => import('./pages/plan'));
const Chats = lazy(() => import('./pages/Chats'));
const ChatRoom = lazy(() => import('./sections/chats/ChatRoom'));
// dadhboard Inners ------------------------------------------------
const Preferences = lazy(() => import('./pages/dashbaord/Preferences'));
const Setting = lazy(() => import('./pages/dashbaord/Setting'));
const HomePage = lazy(() => import('./pages/dashbaord'));
const Profile = lazy(() => import('./pages/dashbaord/Profile'));
export default function App() {
  useScrollToTop();
  const { authInfo } = useSelector(state => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        <Route path="/userprofile" element={<UserProfilePage/>}/>
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<Plan />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:subject" element={<ServiceEnquaryPage />} />
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
              <Route path="userdetails/:id" element={<ViewNewProfile />} />
              <Route path="userProfile" element={<UserProfile />} />
              <Route path="request-user-details/:id" element={<NewRequestUserDetails />} />
              <Route path="friend-request-accepted/:id" element={<AcceptedUserDetail />} />
              <Route path="requested-profile-view/:id" element={<RequestSendedProfileView />} />
              <Route path={'dashboard/'} element={ <Dashboard /> }>
                <Route index element={<HomePage />} />
                <Route path="preferences" element={<Preferences />} />
                <Route path="settings" element={<Setting />} />
                <Route path="gallery" element={<GalleryImage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="profile-setup" element={<CollectUserData />} />
              </Route>
              <Route path={'matches'} element={<Matches />} />
              <Route path={'plans'} element={<Plan />} />
              <Route path={'chat/'} element={<ChatPage />} />
             
              
            </>
          ) : null}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
