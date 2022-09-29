import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constant";
import "./Banner.css";
import axios from "../../axios.js";
import Youtube from "react-youtube";

function Banner() {
  const [movie, setMovie] = useState();
  const [ytId, setYtId] = useState("");

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((Response) => {
        console.log(Response.data.results[0]);
        setMovie(
          Response.data.results.sort(function (a, b) {
            return 0.5 - Math.random();
          })[0]
        );
      });
  }, []);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMOvie = (id) => {
    if (ytId) {
      setYtId("");
    } else {
      axios
        .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((Response) => {
          if (Response.data.results.length !== 0) {
            setYtId(Response.data.results[0]);
          } else {
            alert("Content not available");
          }
        })
        .catch(() => {
          alert("Content unavailable");
        });
    }
  };

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
        }}
      >
        <div className="content">
          <h1 className="title">{movie ? movie.title : ""}</h1>
          <div className="banner-buttons">
            <button className="button" onClick={() => handleMOvie(movie.id)}>
              {ytId ? "Close" : "Play"}
            </button>
            <button className="button">My List</button>
          </div>
          <div className="description">{movie ? movie.overview : ""}</div>
          {ytId && <Youtube opts={opts} videoId={ytId.key} />}
        </div>
        <div className="fade-bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
