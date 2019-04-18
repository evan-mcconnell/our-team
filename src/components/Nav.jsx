import React from 'react';

function Nav(){
    return (
      <div className="main">
          <div className="logo">
              <a><img src={require('../assets/images/throne.jpg')}></img></a>
          </div>
          <div className="links">
              <a>The North</a>
              <a>Crownlands</a>
              <a>Dorne</a>
              <a>Iron Islands</a>
              <a>The Neck</a>
              <a>The Fingers</a>
          </div>
          <div className="shop">
              <a>Pick A Side</a>
              <a>Bend The Knee</a>
              <a>|||</a>
          </div>
          <style jsx>{`
          .main {
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 60px;
            background-color: rgba(0, 0, 0, 0.3);
            display: flex;
            flex-dirrection: row;
            justify-content: space-between;
            align-items: center;
          }
          img {
            width: 46px;
            height: 40px;
            margin-left: 10px;
            padding-top: 20px;
            position: absolute;
            top: -10px;
            opacity: 0.8;
          }
          .links {
            display: flex;
            flex-dirrection: row;
            justify-content: space-between;
            align-items: center;
          }
          a {
            font-size: 0.8em;
            padding: 5px;
            color: white;
            font-family: "Helvetica", "Arial", "sans-serif";
          }

      `}</style>

      </div>
    );
}

export default Nav;
