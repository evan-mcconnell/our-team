import React from 'react';
import { Link } from 'react-router-dom';
import north from '../assets/images/north.jpg';

function Header(){
  return(
    <div className="header">
      <img src={north} alt="northern landscape"/>
      <style jsx>{`
          .header {
            width: 100%;
            margin: 0 auto;
            overflow: hidden;
            height: 350px;
            z-index: -1;
            border-bottom: 3px solid #888;
          }
          img {
            width: 100%;
          }
          `}</style>
      </div>
    );
  }

  export default Header;
