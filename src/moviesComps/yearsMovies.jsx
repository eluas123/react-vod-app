import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../context/context';

export default function YearsMovies() {

  const { setYear } = useContext(AppContext);

  return (
    <div className="container-fluid p-3">
      <div className='container'>
          <div className="d-flex align-items-center col-lg-8">
            <h2 className='text-danger mt-1 me-5'>Top Years: </h2>
            <Link onClick={() => { setYear("2021") }} className='years btn btn-danger' to={'/year/2021'}>2021</Link>
            <Link onClick={() => { setYear("2020") }} className='years btn btn-danger' to={'/year/2020'}>2020</Link>
            <Link onClick={() => { setYear("2000") }} className='years btn btn-danger' to={'/year/2000'}>2000</Link>
            <Link onClick={() => { setYear("1995") }} className='years btn btn-danger' to={'/year/1995'}>1995</Link>
            <Link onClick={() => { setYear("1989") }} className='years btn btn-danger' to={'/year/1989'}>1989</Link>
            <Link onClick={() => { setYear("") }} className='years btn btn-danger' to={'/year/1989'}>All The Times</Link>
          </div>
        </div>
      </div>
  )
}
