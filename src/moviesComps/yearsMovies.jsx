import React, { useContext } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/context';

export default function YearsMovies() {

  const { setYear,year, searchQ } = useContext(AppContext);
  const nav = useNavigate();

  const array = [];
  for (let i = 1950; i <= (new Date()).getFullYear(); i++) {
    array[i] = i;
  }

  const searchByYears = (selectedOption) =>{
    setYear(selectedOption);
    nav(`/search/${searchQ}/year/${selectedOption}`)
  }

  console.log("year",year)

  return (
    <div className="container-fluid">
      <div className='container'>
        <div className='col-md-6 d-flex align-align-items-center'>
          <h2 className='text-danger mt-1 me-3'>All Years: </h2>
          <select onChange={event =>{
            searchByYears(event.target.value)
            }} className='form-control w-50 h-50 mt-2'>
            {array.map((item) => {
              return (
                <option key={item} value={item}>{item}</option>
              )
            })}
          </select>
        </div>
        <div className="d-flex align-items-center col-lg-8 mt-3">
          <div>
            <h2 className='text-danger mt-1 me-2'>Top Years: </h2>
          </div>
          <div className='col-md-8 linksYears'>
          <Link onClick={() => { setYear("2021") }} className='years btn btn-danger' to={`/search/${searchQ}/year/2021`}>2021</Link>
          <Link onClick={() => { setYear("2020") }} className='years btn btn-danger ignore' to={`/search/${searchQ}/year/2020`}>2020</Link>
          <Link onClick={() => { setYear("2000") }} className='years btn btn-danger' to={`/search/${searchQ}/year/2000`}>2000</Link>
          <Link onClick={() => { setYear("1995") }} className='years btn btn-danger ignore' to={`/search/${searchQ}/year/1995`}>1995</Link>
          <Link onClick={() => { setYear("1989") }} className='years btn btn-danger' to={`/search/${searchQ}/year/1989`}>1989</Link>
          <Link onClick={() => { setYear("2022") }} className='years btn btn-danger ignore' to={'/search/'+searchQ}>All The Times</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
