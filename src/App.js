import './App.css';
import Raw from './Rows.jsx'
import requests from './requests.js';

// 27ab8be554458dc2e8d27a5f378e0908 api key
///base:https://api.themoviedb.org/3/movie/550

function App() {
  return (
    <div className="App">
      <Raw 
      title = "NERFLIX ORiGINAL" 
      fetchiURL = {requests.fetchNetflixOriginal}
      isLargeRow ={true}
      />
      <Raw title = "Trending Now" fetchiURL = {requests.fetchTrending}/>
      <Raw title = "Top Rated"fetchiURL = {requests.fetchTopRated}/>
      <Raw title = "Action Movies"fetchiURL = {requests.fetchActionMovies}/>
      <Raw title = "Comedy Movies"fetchiURL = {requests.fetchComedyMovies}/>
      <Raw title = "Horror Movies"fetchiURL = {requests.fetchHorrorMovies}/>
      <Raw title = "Romance Movies"fetchiURL = {requests.fetchRomanceMovies}/>
      <Raw title = "Documentaries"fetchiURL = {requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
