import React from 'react'
import AllProfile from './AllProfile'
import Header from './Header'
import Category from './Category'
import SuccessStories from './SuccessStories'
import BestOne from './BestOne'
import WelcomePage from './WelcomePage'
import GenuineProfiles from './GenuineProfiles'
import WorkProcess from './WorkProcess'
import RecentCouple from './RecentCouple'
import ReviewSection from './ReviewSection'
import WeddingArangeMent from './WeddingArangeMent'
import Gallery from './Gallery'

const Home = () => {
  return (
    <>
     <Header/>
     <AllProfile/>   
     <Category/>
     <SuccessStories/>
     <BestOne/>
     <WelcomePage/>
     <GenuineProfiles/>
     <WorkProcess/>
     <RecentCouple/>
     <ReviewSection/>
     <WeddingArangeMent/>
     <Gallery/>
    </>

  )
}

export default Home