import React, { useEffect, useMemo, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constant";
import axios from "../../axios";
import YoutubePlayer from "./YoutubePlayer";
import "./Styles/MovieBanner.css";

const MovieBanner = () => {
  const [movie, setMovie] = useState();
  const [trailer, setTrailer] = useState("");


  useMemo(() => {
    const fetchMovieData = async () => {
      try {
        const result = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        setMovie(result.data.results.sort(function (a, b) {
          return 0.5 - Math.random();
        })[0]
        );
      } catch (error) {
        alert('Network Error' + error)
      }
    }
    fetchMovieData();
  }, []);

  const openYoutube = (movie) => {
    axios
      .get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((Response) => {
        const result = Response.data.results
        if (result.length !== 0) {
          const movieVideo = result.find(element => {
            if (element.type === "Trailer" || element.type === "Teaser") {
              return element
            }
          });
          setTrailer(movieVideo)
        }
      }).catch((error) => {
        alert('Content unavailable')
      })
  };

  useEffect(() => {
    trailer ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
  }, [trailer])

  const displaySize = window.innerWidth;

  return (
    <div className="banner-container">
      {displaySize > 675 ?
        <div
          className="banner"
          style={{
            backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
          }}
        /> : <div
          className="banner"
          style={{
            backgroundImage: `url(${movie ? imageUrl + movie.poster_path : ""})`,
          }}
        />}
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button" onClick={() => openYoutube(movie)}>
            Play
          </button>
          <button className="button">My List</button>
        </div>
        <div className="description">
          <p>{movie ? movie.overview : ""}</p>
        </div>
      </div>
      {trailer &&
        <YoutubePlayer setTrailer={setTrailer} trailer={trailer} />
      }
    </div>
  );
}

export default MovieBanner;
