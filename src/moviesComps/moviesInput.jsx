import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';


export default function MoviesInput() {
    const{searchQ,setSearch,ar,setAr,} = useContext(AppContext);
    let inputRef = useRef();
    const nav = useNavigate();

  return (
    <div className="container-fluid p-3">
        <div className="container">
           <div className="row">
               <div className="col-lg-4">
                   <h2 className='text-danger'>Movies Search</h2>
               </div>
               <div className="col-lg-8 d-flex align-items-center">
                   <div className='text-danger sort me-4'>Search:</div>
                   <input ref={inputRef} onKeyDown={(e) => { if (e.key === 'Enter') {nav("/search/"+searchQ);
                    setSearch(e.target.value) }}} type="search" placeholder='search...' className='form-control w-50'/>
                   <button onClick={()=>{
                     setSearch(inputRef.current.value)
                   }} className='btn btn-danger ms-2' to={'/search/'+searchQ}>Search</button>
               </div>
           </div>
        </div>
    </div>
  )
}
