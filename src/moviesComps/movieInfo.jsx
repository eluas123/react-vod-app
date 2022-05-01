import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';

export default function MovieInfo() {

  const { Loading, setLoading } = useContext(AppContext);
  const [item, setItem] = useState({});
  let params = useParams();

  useEffect(() => {
    doInfoApi();
  }, [params.id])

  const doInfoApi = async () => {
    setLoading(true);
    let url = `https://www.omdbapi.com/?i=${params.id}&apikey=b0f0b024`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setItem(resp.data);
    setLoading(false)
  }


  return (
    <div className="">
      <header>
          <h1 className='text-danger ps-5'>VOD APP</h1>
          </header>
      {Loading ?
        <div className="text-center">
          <img src='https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Loading-Bar-Gif-Transparent-Loading-Gif-.gif'
            width="300" height="300" alt='loading' />
        </div> :
        <div className="col-lg-6 shadow p-3 mx-auto overflow-hidden mt-5 container-info">
          <img src={item.Poster || "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} className="w-50 float-start me-2" height="500" />
          <h2 className='text-danger'>{item.Title}</h2>
          <div className='mt-1 info'>Genere: {item.Genre}</div>
          <div className='mt-1 info'>Score: {item.imdbRating}</div>
          <div className='mt-1 info'>Votes count: {item.imdbVotes}</div>
          <div className='mt-1 info'>Year: {item.Year}</div>
          <div className='mt-1 info'>Actors: {item.Actors}</div>
          <div className='mt-1 info'>Language: {item.Country}</div>
          <p className='mt-3 info'>Summary: {item.Plot}</p>
          <Link className='btn btn-danger mt-5 info' to={"/"}>Back to Movies List</Link>
        </div>}
        <header className='text-center'>
      <div className='sort text-danger mt-5 p-3'>©Elias Areta - 2022</div>
      </header>
    </div>
  )
}
