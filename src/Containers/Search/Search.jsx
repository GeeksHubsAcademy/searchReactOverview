
import React, {useState, useEffect} from 'react';
import { bringMovies } from '../../Services/apiCalls';
import './Search.css';

//We are passing deestructured props for a easier use
const Search = ({name}) => {

    //useState is the mandatory React hook method we are going to use on hooks

    const [movies, setMovies] = useState([]);
    const [criteria, setCriteria] = useState('');

    //I declare the input handler as an arrow function

    const inputSearchHandler = (e) => {

        //Binding the input to the hook (input criteria to hook criteria)
        setCriteria(e.target.value);

        setTimeout(() => {
            
            if(criteria.length > 2){
                bringMovies(criteria)
                .then(movieResults => {
                    console.log(movieResults)

                    //Once I got the movies, I put them inside the hook movies
                    setMovies(movieResults);
                })
                .catch(error => console.log(error));
            } else if (criteria === ''){
                    setMovies([])
            };
            
        }, 500);

    }

    useEffect(()=>{

        //This executed when the hook criteria changes.

        if(criteria != ''){

            console.log(criteria);
        }

    },[criteria]);

    useEffect(()=>{
        if(movies.length > 0){

            console.log("helloooo",movies)
        }
    },[movies])



    return (
        <div className='searchDesign'>
            i am the search...of .... {name}

            <input name='criteria' placeholder='search a film' className='inputDesign'
                onChange={(e)=>inputSearchHandler(e)}/>
        </div>
    )
}

export default Search;