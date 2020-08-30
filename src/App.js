import React,{ useState, useEffect } from 'react';
import TmDB from './TmDB';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie'
import './App.css'
import Header from './components/Header';
import loading from './assets/Netflix_LoadTime.gif';

function App() {
  const [ movies, setMovies ] = useState([]);
  const [feturedData, setFutureData ] = useState(null);
  const [blackHeader,setBlackHeader] = useState(false);
  const [load,setLoad] = useState(false)

  useEffect(() => {
    TmDB.geHomeList()
    .then(item => {
       setMovies(item)
       //pegando o feautured
       let { items:{ results } } = item.filter(item => item.slug === 'originals')[0];
       const randomChosen = Math.floor(Math.random() * results.length)
       const chosen = results[randomChosen];
       TmDB.getMovieInfo(chosen.id,'tv').then(item => {
         setFutureData(item)
         setLoad(true)
       })
    })
  },[])

  useEffect(() => {
    const scrollListener = (e) => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }else{
        setBlackHeader(null)
      }
    }
    window.addEventListener('scroll',scrollListener)
    return () => {
      window.removeEventListener('scroll',scrollListener)
    }
  },[])

  // console.log(movies,'MOVIES')
  // console.log(movies,'feturedata')
  console.log('BLACKHEADER',blackHeader)
  return (
    <div className="page">
      <Header black={blackHeader}/>
      
      {feturedData && <FeaturedMovie item={feturedData}/>}

      <section className="lists">
        {movies.map(item => {
          return <MovieRow key={item.slug} movie={item}/>
        })}
      </section>
      <footer>
        Feito com <span role="img" aria-label="coraçao"></span> Live youtube Bonyeki<br/>
        Direitos de imagens Netflix

      </footer>
      <div className="loading" style={{
        display:load ? 'none' : ''
      }}>
        <img src={loading} alt=""/>
      </div>
    </div>
  );
}

export default App;
