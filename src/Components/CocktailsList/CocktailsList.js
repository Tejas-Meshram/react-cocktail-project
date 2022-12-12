import React from 'react'
import './cocktailslists.css'
import { useGlobalContext } from '../../context'
import Loading from '../../Pages/Loading';
import Cocktail from '../Cocktail/Cocktail';

function CocktailsList() {
    const {loading, cocktails} = useGlobalContext();

    if(loading){
        return <Loading/>;
    }

    if(cocktails.length < 1){
        return (
            <h2 className='wrong-keyword'>Oops! Wrong Search</h2>
        );
    }
  return (
    <section className="cocktails-section">
        <h2 className='title'>Cocktails</h2>
        <div className="cocktails-center">
            {cocktails.map((item)=> {
                return <Cocktail key={item.id} {...item}/>
            })}
        </div>
    </section>
  )
}

export default CocktailsList