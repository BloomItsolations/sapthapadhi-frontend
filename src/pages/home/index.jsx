import React from "react";
import AllProfile from "../../components/home/AllProfile";
import Header from "../../components/home/Header";
import Category from "../../components/home/Category";
import SuccessStories from "../../components/home/SuccessStories";
import BestOne from "../../components/home/BestOne";
import WelcomePage from "../../components/home/WelcomePage";
import GenuineProfiles from "../../components/home/GenuineProfiles";
import WorkProcess from "../../components/home/WorkProcess";
import RecentCouple from "../../components/home/RecentCouple";
import ReviewSection from "../../components/home/ReviewSection";
import WeddingArangeMent from "../../components/home/WeddingArangeMent";
import Gallery from "../../components/home/Gallery";

const Home = () => {
  return (
    <>
      <Header />
      <AllProfile />
      <Category />
      <SuccessStories />
      <BestOne />
      <WelcomePage />
      <GenuineProfiles />
      <WorkProcess />
      <RecentCouple />
      <ReviewSection />
      <WeddingArangeMent />
      <Gallery />
    </>
  );
};

export default Home;
