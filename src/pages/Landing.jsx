import React from 'react'
import Header from '../components/landingComponents/Header'
import Hero from '../components/landingComponents/Hero'
import TeacherSuccessStories from '../components/landingComponents/TeacherSuccessStories'
import FAQ from '../components/landingComponents/FAQ'
import PricingSection from '../components/landingComponents/PricingSection'
import CallToAction from '../components/landingComponents/CallToAction'
import Footer from '../components/landingComponents/Footer'


const Landing = () => {
  return (
    <div>
      <Header/>
    <main className="bg-green-100 min-h-screen">
       <Hero />
        <TeacherSuccessStories/>
        <FAQ />
        {/* <PricingSection /> */}
        <CallToAction />
    </main>
    <Footer />
    </div>
  )
}

export default Landing