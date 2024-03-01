import React from 'react'
import { Title } from './Title'
import { MovieList } from './MovieList'

export const InTheatres = () => {
  return (
    <div className='w-full pl-60 pr-60 bg-black'>
        <Title>In Theatres</Title>
        <div className='overflow-auto '>
            <MovieList movieTitle="Avengers" moviePoster="https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg"></MovieList>
            <MovieList movieTitle="Doctor Strange: Multiverse of Madness" moviePoster="https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/04/final-1.png?ssl=1"></MovieList>
            <MovieList movieTitle="Thor: Love and Thunder" moviePoster="https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg"></MovieList>
            <MovieList movieTitle="Spider Man - Far from Home" moviePoster="https://comic-cons.xyz/wp-content/uploads/marvel-cinematic-universe-spiderman-far-from-home-movie-poster-203x300.jpg"></MovieList>
            <MovieList movieTitle="Hanuman" moviePoster="https://i.pinimg.com/736x/aa/92/13/aa92130b5dcbb96bd933c40ae7d798e2.jpg"></MovieList>
        </div>
    </div>
  )
}
