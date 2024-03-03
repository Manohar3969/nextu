import React from 'react'
import { Header } from './Header';
import { Footer } from './Footer';
import { MovieDetailsDescription } from './MovieDetailsDescription';

export const MovieDetails = () => {
  return (
    <div>
        <Header></Header>
        <MovieDetailsDescription></MovieDetailsDescription>
        <Footer></Footer>
    </div>
  )
}
