import React from 'react'
import SearchBox from './../Components/SearchBox/SearchBox'
import CocktailsList from '../Components/CocktailsList/CocktailsList'

function Home() {
  return (
    <main>
        <SearchBox/>
        <CocktailsList/>
    </main>
  )
}

export default Home