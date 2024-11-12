import React from 'react'
import Header from '@/components/header'
import Contact from '@/components/contact'
import Map from '@/components/map'
import Footer from '@/components/footer'

const Page = () => {
  return (
    <div>
        <Header/>
        <Contact/>
        <Map/>
        <br /><br /><br />
        <Footer/>
    </div>
  )
}

export default Page