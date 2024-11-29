import React from 'react'
import Header from '@/components/header'
import CardsMap from '@/components/cards_map'
import SaleCards from '@/components/sale_cards'
import RecentlyWatchedCards from '@/components/recently_cards'
import Footer from '@/components/footer'
const Page = () => {
  return (
    <>
      <Header/><br /><br /><br />
      <CardsMap/>
      <SaleCards/>
      <RecentlyWatchedCards/><br /><br /><br />
      <Footer/><br /><br /><br />
    </>
  )
}

export default Page