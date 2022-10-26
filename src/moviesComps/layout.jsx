import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppMovies from './appMovies'

export default function Layout() {
  return (
    <React.Fragment>
       <header>
          <h1 className='text-danger ps-5'>VOD APP</h1>
          </header>
          <AppMovies/>
      <footer className='text-center'>
      <div className='sort text-danger mt-5 p-3'>©Elias Areta - 2022</div>
      </footer>
    </React.Fragment>
  )
}
