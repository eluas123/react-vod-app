import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';


export default function MoviesInput() {
    const{searchQ,setSearch} = useContext(AppContext);
    const inputRef = useRef();
    const nav = useNavigate();

    const onKeySearch = (e) =>{
      if(e.key === 'Enter'){
        onSearchClick();
      }
    }

    const onSearchClick = () =>{
      let input_val = inputRef.current.value;
      if(input_val.length > 0){
        console.log("check input", input_val)
        setSearch(input_val)
        nav("/search/"+input_val)
      }
    }

  return (
    <div className="container-fluid p-3">
        <div className="container">
               <div className="col-lg-8 d-flex align-items-center">
                   <h2 className='text-danger mt-1 me-3'>Search:</h2>
                   <input onKeyDown={onKeySearch} ref={inputRef} type="search" placeholder='search...' className='form-control w-50'/>
                   <button onClick={onSearchClick} className='btn btn-danger ms-2'>Search</button>
               </div>
        </div>
    </div>
  )
}
