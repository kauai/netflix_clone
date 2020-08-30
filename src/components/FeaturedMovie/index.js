import React from "react";
import "./style.css";

function FeaturedMovie({ item }) {
  let firstDate = new Date(item.first_air_date);
  let genres = item.genres.map(item => item.name).join(', ')

   function calculateLetter(text){
     if(text.length > 200){
       return `${text.substring(0,300)}...`;
     }
     return text;
   }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--season">
              {item.number_of_seasons} Temporad
              {item.number_of_seasons === 1 ? "a" : "as"}
            </div>
            <div className="featured--description">{calculateLetter(item.overview)}</div>
            <div className="featured--buttons">
                <a className="watchButton" href={`/watch/${item.id}`}>Assistir</a>
                <a className="listButton" href={`/list/add/${item.id}`}>Minha Lista</a>
            </div>
            <div className="featured--genres">
                <strong>Generos: {genres}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;
