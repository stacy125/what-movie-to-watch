import MovieGallery from './components/MovieGallery'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import './style/styles.css'


function App() {
  const [movieData, setMovieData] = useState([])

  const fetchMovieData = (searchedValue, selectedTypeValue = null) => {

    let URL = `https://www.omdbapi.com/?apikey=5ca71113&t=${searchedValue}&type=${selectedTypeValue}`

    fetch(URL)
    .then(response => response.json())
    .then(jsonData => setMovieData(jsonData))
  }

  useEffect(() => {
    fetchMovieData('star wars')
    }, [])

  return (
    <div className="App">
      <MovieGallery title={'Current Search'} movieData={movieData} recentGallery={false}/>
      <MovieGallery title={'Previous 3 Searches'} movieData={movieData} recentGallery={true}/>
      <Header fetchMovieData={fetchMovieData} />
    </div>
  );
}

export default App;
