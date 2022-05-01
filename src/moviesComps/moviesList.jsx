import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/context'

export default function MoviesList() {

    const{ar,Loading} = useContext(AppContext);

  return (
      <div>
        {Loading ?
         <div className="text-center">
         <img src='https://cutewallpaper.org/21/loading-gif-transparent-background/Tag-For-Loading-Bar-Gif-Transparent-Loading-Gif-.gif'
/>
       </div> :
    <div className='container'>
        <div className="row">
            {ar.map(item =>{
                return(
                    <div key={item.imdbID} className="col-lg-6 p-3">
                        <div className='p-2 shadow overflow-hidden'>
                        <img src={item.Poster || "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} className="float-start me-2" height='160'/>
                        <h2>{item.Title}</h2>
                        <Link className='btn btn-danger info' to={"/video/"+item.imdbID}>Information</Link>
                    </div>
                    </div>
                )
            })}
        </div>
        </div>}
    </div>
  )
}
