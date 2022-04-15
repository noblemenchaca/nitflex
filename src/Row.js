import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

const imgURL = 'https://image.tmdb.org/t/p/original/';



function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, settrailerURL] = useState("")
    useEffect(() => {
        // if [], fun once when the row load and dont run again
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    
    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerURL) {
            settrailerURL('');
        } else {
            movieTrailer((movie?.name || ""), (error, response) => {
                console.log(error, response);
            })
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams.get('v'));
                settrailerURL(urlParams.get('v'));
            })
            .catch((error) => console.log(error))
        }
    }

    return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row_posters'>
            {movies.map(movie => (
                <img 
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${imgURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name} />
            ))}
        </div>
        {/* constiainer -> posters */}
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}

    </div>
  )
}

export default Row