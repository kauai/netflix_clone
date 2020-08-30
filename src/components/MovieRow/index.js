import React,{ useState } from "react";
import "./style.css";
import { NavigateBefore, NavigateNext } from '@material-ui/icons'

function MovieRow({ movie: { title, items } }) {
  const [scrollX,setScrollX] = useState(-400)
const handleLeftArrow = () => {
  // let x = scrollX + 300;//nao rolou muito lento
  let x = scrollX + Math.round(window.innerWidth / 2);
  if(x > 0){
    x = 0
  }
  setScrollX(x)
}
const handleRightArrow = () => {
  let x = scrollX - Math.round(window.innerWidth / 2);
  let listW = items.results.length * 150
  if((window.innerWidth - listW) > x){
    x = (window.innerWidth - listW) - 60;
  }
  setScrollX(x)
}

  return <div className='movieRow'>
        <h2>{title}</h2>
        
<div onClick={handleLeftArrow} className="movieRow--left"><NavigateBefore style={{fontSize:50}}/></div>
<div onClick={handleRightArrow} className="movieRow--right"><NavigateNext style={{fontSize:50}}/></div>

        <div className="movieRow--listarea">
            <div className="movieRow--list" style={{
              marginLeft:scrollX,
              width:items.results.length * 150
            }}>
                    {items.results && items.results.map(item => {
                        return <div className="movieRow--item">
                           <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt=""/>
                        </div>
                    })}
            </div>
        </div>
      </div>;
}

export default MovieRow;
