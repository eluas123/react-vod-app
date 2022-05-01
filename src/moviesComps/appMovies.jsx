import React from 'react'
import MoviesInput from './moviesInput'
import MoviesList from './moviesList'
import Picture from './picture'
import YearsMovies from './yearsMovies'


export default function AppMovies() {
  return (
    <div>
        <Picture/>
        <MoviesInput/>
        <YearsMovies/>
        <MoviesList/>
    </div>
  )
}
