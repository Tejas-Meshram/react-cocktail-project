import React from 'react'
import './searchbox.css'
import { useGlobalContext } from '../../context'
import { useRef, useEffect } from 'react';

function SearchBox() {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = useRef('');

    useEffect(()=> {
        searchValue.current.focus();
    },[])

    const searchCocktails = () => {
        setSearchTerm(searchValue.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    

  return (
    <section className="section-search">
        <form className='search-form' onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="name">Search Your Favourite Cocktails</label>
                <input type="text" name='name' id='name' ref={searchValue} onChange={searchCocktails}/>
            </div>
        </form>
    </section>
  )
}

export default SearchBox