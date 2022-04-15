import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title='NITFLEX ORIGINALS'
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchURL={requests.fetchTrending}/>
      <Row title='Action' fetchURL={requests.fetchActionMovies}/>
      <Row title='Comedy' fetchURL={requests.fetchComedyMovies}/>
      <Row title='Horror' fetchURL={requests.fetchHorrorMovies}/>
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
      <Row title='Romance' fetchURL={requests.fetchRomanceMovies}/>

    </div>
  );
}

export default App;
