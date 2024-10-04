import React from 'react'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import Banner2 from './components/Banner/Banner2'
import Services from './components/Services/Services'
import Subscribe from './components/Subscribe/Subscribe'


function App() {
  return (
    <main className='overflow-x-hidden bg-white text-dark'>
      <Hero/>
      <Services />
      <Banner />
      <Subscribe/>
      <Banner2/>
    </main>
  )
}

export default App