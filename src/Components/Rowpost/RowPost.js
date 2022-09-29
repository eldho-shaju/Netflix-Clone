import React from "react";
import "./RowPost.css";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constants/Constant";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [ytId, setYtId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        setMovies(Response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
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
        }).catch(() => {
          alert('Content unavailable')
        })
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, ind) => (
          <img
            className={props.isSmall ? "smallPoster" : "poster"}
            key={ind}
            src={`${imageUrl + obj.backdrop_path}`}
            alt="Poster"
            onClick={() => handleMOvie(obj.id)}
          />
        ))}
      </div>
      {ytId && <Youtube opts={opts} videoId={ytId.key} />}
    </div>
  );
}

export default RowPost;
