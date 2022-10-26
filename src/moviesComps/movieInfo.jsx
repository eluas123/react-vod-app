import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';

export default function MovieInfo() {

  const { Loading, setLoading } = useContext(AppContext);
  const [item, setItem] = useState({});
  const [obj, setObj] = useState({});
  const [stars, setStars] = useState([]);
  let params = useParams();

  useEffect(() => {
    doInfoApi();
    makeStars();
  }, [params.id,obj])

  // useEffect(() =>{
  // },[obj])

  const doInfoApi = async () => {
    setLoading(true);
    let url = `https://www.omdbapi.com/?i=${params.id}&apikey=b0f0b024`;
    let resp = await axios.get(url);
    console.log(resp.data);
    setItem(resp.data);
    setObj(resp.data.Ratings[0].Value.slice(0,3))
    setLoading(false)
  }

  console.log("obj",obj)
  const makeStars = () => {
    setStars([]);
    let stars = [];
    if(obj==10){
      for (let index = 0; index < obj; index++) {
        stars.push(<div className='text-white'><img width={22} src='/star.png' alt={'star'}/></div>)
    }
    setStars(stars);
    return;
    }
    for (let index = 0; index < obj-1; index++) {
        stars.push(<div className='text-white'><img width={22} src='/star.png' alt={'half_star'}/></div>)
    }
    if (obj % 2 != 0) stars.push(<div className='text-white'><img width={22} alt={'star'} src='/half_star.png' /></div>)
    setStars(stars);
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
        <div key={item.imdbid} className="col-lg-8 shadow p-3 mx-auto overflow-hidden mt-5 container-info">
          <img src={item.Poster=='N/A'? "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2":item.Poster} className="w-50 float-start me-2" height="500" />
          <h2 className='text-danger'>{item.Title}</h2>
          <div className='mt-1 info'><strong className='text-danger me-1'>Genere:</strong> {item.Genre}</div>
          <div className='mt-1 info'><strong className='text-danger me-1'>Votes count:</strong> {item.imdbVotes}</div>
          <div className='mt-1 info'><strong className='text-danger me-1'>Year:</strong> {item.Year}</div>
          <div className='mt-1 info'><strong className='text-danger me-1'>Actors:</strong> {item.Actors}</div>
          <div className='mt-1 info'><strong className='text-danger me-1'>Language:</strong> {item.Country}</div>
          <p className='mt-1 info'><strong className='text-danger me-1'>Summary:</strong> {item.Plot}</p>
          <div className='mt-1 d-flex my-4 my-md-0'><strong className='text-danger me-3'>Rate:</strong>{stars}</div>
          <Link className='btn btn-danger mt-5 info' to={"/"}>Back to Movies List</Link>
        </div>}
        <header className='text-center'>
      <div className='sort text-danger mt-5 p-3'>©Elias Areta - 2022</div>
      </header>
    </div>
  )
}
