import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios';
import { AppContext } from './context/context'
import AppMovies from './moviesComps/appMovies'
import MovieInfo from './moviesComps/movieInfo'
import Page404 from './moviesComps/page404';
import MoviesInput from './moviesComps/moviesInput';
import YearsMovies from './moviesComps/yearsMovies';
import Layout from './moviesComps/layout';
import { apiKey } from './secret/secretKey';

export default function AppRoutes() {
  let [year,setYear] = useState("");
  let [searchQ,setSearch] = useState("bank");
  let [ar,setAr] = useState([]);
  const [Loading,setLoading] = useState(false);

useEffect(()=>{
  doApi();
},[searchQ])

useEffect(()=>{
  doApi();
},[year])

const doApi = async() =>{
  setLoading(true);
 let url = `https://www.omdbapi.com/?s=${searchQ}&y=${year}&apikey=${apiKey}`;
 let resp = await axios.get(url);
 console.log("axios", resp.data.Search);
 setAr(resp.data.Search);
 setLoading(false);
}


  return (
      <div>
    <Router>
    <AppContext.Provider value={{year,setYear,searchQ,setSearch,ar,setAr,Loading,setLoading}}>
        <Routes>
          <Route path='/' element={<Layout/>}>
           <Route index element={<AppMovies/>}/>   
           <Route path="/search/searchQ" element={<MoviesInput/>}/>
           <Route path='search/searchQ/year/yy' element={<YearsMovies/>}/>       
           <Route path="/*" element={<Page404/>}/>
           </Route>
           <Route path="/video/:id" element={<MovieInfo/>}/>    
        </Routes>
        </AppContext.Provider>
    </Router>
    </div>
  )
}
