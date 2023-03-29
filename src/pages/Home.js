import React from 'react'
import FooterSection from '../compontes/layout/FooterSection'
import InterviewSection from '../compontes/layout/InterviewSection'
import NewsSection from '../compontes/layout/NewsSection'
import PodcastSection from '../compontes/layout/PodcastSection'
import SoundchatVideoSection from '../compontes/layout/SoundchatVideoSection'
import HeaderTopSection from '../compontes/header/HeaderTopSection';
import HeaderBottamSection from '../compontes/header/HeaderBottamSection'
export default function Home() {
  return (
    <>
    <HeaderTopSection/>
    <HeaderBottamSection />
    <SoundchatVideoSection/>
    <PodcastSection/>
    <NewsSection/>
    <InterviewSection/>
    <FooterSection/>
    </>
  )
}
