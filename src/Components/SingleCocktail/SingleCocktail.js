import React from 'react'
import './singlecocktail.css'
import { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../../Pages/Loading'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] = useState(null);

    const getCocktail = async () => {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        const {drinks} = data;
        
        if(drinks){
            const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strGlass: glass,
                strCategory: category,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
            } = drinks[0];

            const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4];
            const newCocktail = {
                name,
                image,
                info,
                glass,
                category,
                instructions,
                ingredients
            }

            setCocktail(newCocktail);
        }
        else {
            setCocktail(null);
        }
        setLoading(false);
    }

    useEffect(()=> {
        setLoading(true);
        getCocktail();
    },[id])

    if(loading){
        return <Loading/>;
    }

    if(!cocktail){
        return <h2>No Cocktail to Display</h2>
    }
    else {
        const {name, image, category, info, glass, instructions, ingredients} = cocktail;

        return (
            <section className="cocktail-section">
                <Link to='/' className='btn'>Back Home</Link>
                <h2 className="section-title">{name}</h2>
                <div className="drink">
                    <img src={image} alt={name} />
                    <div className="drink-info">
                        <p>
                            <span className="drink-data">name :</span>{name}
                        </p>
                        <p>
                            <span className="drink-data">category :</span>{category}
                        </p>
                        <p>
                            <span className="drink-data">info :</span>{info}
                        </p>
                        <p>
                            <span className="drink-data">glass :</span>{glass}
                        </p>
                        <p>
                            <span className="drink-data">instructions :</span>{instructions}
                        </p>
                        <p>
                            <span className="drink-data">ingredients :</span>
                            {ingredients.map((item, index) => {
                                return item ? <span key={index}>{item}</span> : null;
                            })}
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default SingleCocktail