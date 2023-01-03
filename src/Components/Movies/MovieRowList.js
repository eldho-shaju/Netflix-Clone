import React from 'react'
import MoviePosterRow from './MoviePosterRow'
import { originals, action, comedy, horror, romance } from "../../Url";

const MovieRowList = () => {
  

  return (
    <div>
      <MoviePosterRow fetchUrl={originals} title="Netflix Originals" />
      <MoviePosterRow fetchUrl={action} title="Action" isSmall />
      <MoviePosterRow fetchUrl={comedy} title="Comedy" isSmall />
      <MoviePosterRow fetchUrl={horror} title="Horror" isSmall />
      <MoviePosterRow fetchUrl={romance} title="Romance" isSmall />
    </div>
  )
}

export default MovieRowList