
import React from 'react'
import './App.css'
import Header from './components/Header'
import PricingSection from './components/PricingSection'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import CallToAction from './components/CallToAction'

import TeacherSuccessStories from './components/TeacherSuccessStories'

function App() {
  return (
    <div>
      <Header/>
    <main className="bg-green-100 min-h-screen">
       <Hero />
        <TeacherSuccessStories/>
        <FAQ />
        <PricingSection />
        <CallToAction />
    </main>
    <Footer />
    </div>
  )
}

export default App
