import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { InTheatres } from './InTheatres';
import { LatestReviews } from './LatestReviews';

export const HomePage = () => {
  return (
    <div>
        <Header></Header>
        <InTheatres></InTheatres>
        <LatestReviews></LatestReviews>
        <Footer></Footer>
    </div>
  )
}
