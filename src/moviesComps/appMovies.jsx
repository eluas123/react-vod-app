import React from 'react'
import MoviesInput from './moviesInput'
import MoviesList from './moviesList'
import YearsMovies from './yearsMovies'


export default function AppMovies() {
  return (
    <div>
      <main className='BackGroundImage'></main>
        <MoviesInput/>
        <YearsMovies/>
        <MoviesList/>
    </div>
  )
}
