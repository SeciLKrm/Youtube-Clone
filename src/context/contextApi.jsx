import {createContext,  useEffect,  useState} from 'react'
import {fetchDataFromApi } from '../utils/api'

export const Context = createContext();

export const ContextProvider= ({children} ) =>{
    const [selectedCategory, setSelectedCategory]= useState('New')
    const [searchResult, setSearchResult] =useState([])

    useEffect(()=>{
fetchCategory(selectedCategory)
    },[selectedCategory])

    const fetchCategory=(query)=>{
        fetchDataFromApi (`search/?q=${query}`).then(({contents})=>{
   setSearchResult(contents)
     })
     
     
    }
    
    return(
       <Context.Provider value={{selectedCategory, setSelectedCategory, searchResult}}>
       {children}
       </Context.Provider>
    )
}