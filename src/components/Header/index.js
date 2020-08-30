import React from "react";
import "./style.css";
import logo from '../../assets/netflix-logo.svg';
import user from '../../assets/user-netflix.png';

function Header({ black }) {
    console.log(black,'black')
  return (
      <header className={ black ? 'black' : 'teste'}>
          <div className="header--logo">
              <a href="">
                <img height="36" width="134" src={logo} alt=""/>
              </a>
          </div>
          <div className="header--user">
              <a href="">
                  <img src={user} alt=""/>
              </a>
          </div>
      </header>
  )
}

export default Header;
