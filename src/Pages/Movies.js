import React from 'react'
import { MovieBanner, MovieList } from '../Components/Movies/Index.js/MovieIndex'

const Movies = () => { 
    return (
        <div id='movies'>
            <MovieBanner />
            <MovieList />
        </div>
    )
}

export default Movies