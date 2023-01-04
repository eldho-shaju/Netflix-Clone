import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constant";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Styles/MoviePosterRow.css";
import YouTube from "react-youtube";

const MoviePosterRow = ({ title, fetchUrl, isSmall }) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const result = await axios.get(fetchUrl)
        setMovies(result.data.results);
      }
      catch (error) {
        alert("Network Error" + error);
      }
    }
    retrieveData()
  }, [fetchUrl]);

  const openMovieTrailer = (movie) => {
    if (trailer) {
      setTrailer('')
    } else {
      axios
        .get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((Response) => {
          const result = Response.data.results
          if (result.length !== 0) {
            const movieVideo = result.find(element =>
              element.type === "Trailer" || element.type === "Teaser"
            );
            setTrailer(movieVideo)
          }
        }).catch((error) => {
          alert('Content unavailable')
        })
    }
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div id="poster">
      <div className="movie-row">
        <h2>{title}</h2>
        <div className="posters">
          {movies?.map((movie) => {
            const { backdrop_path, id, title, poster_path } = movie
            return (
              <div key={id}>
                {
                  !backdrop_path || !poster_path ?
                    <div/> :
                    <LazyLoadImage
                      effect="blur"
                      
                      className={isSmall ? "small-poster" : "big-poster"}
                      src={`${imageUrl}${isSmall ? backdrop_path : poster_path}`}
                      alt={title}
                      onClick={() => openMovieTrailer(movie)}
                    />
                }
              </div>
            )
          })}
        </div>
      </div>
      {trailer &&
        <div id='row-youtube'>
          <div className='row-video-container'>
            <YouTube opts={opts} videoId={trailer.key} onload="iFrameResize()" />
          </div>
        </div>
      }
    </div>
  );
}

export default MoviePosterRow;
