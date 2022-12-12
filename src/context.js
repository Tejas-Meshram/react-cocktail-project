import React, {createContext, useContext, useEffect, useState, useCallback} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    const fecthDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json();
            const {drinks} = data;

            if(drinks){
                const newCocktails = drinks.map((item)=> {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass
                    } = item;

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass
                    }
                })
                setCocktails(newCocktails);
            }
            else {
                setCocktails([])
            }
            setLoading(false);
        } catch (error) {
            console.log(error.respone)
        }
    }, [searchTerm])

    useEffect(()=> {
        fecthDrinks();
    },[searchTerm, fecthDrinks])

    return (
        <AppContext.Provider 
            value={
                {loading,
                setSearchTerm,
                cocktails}
            }>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};