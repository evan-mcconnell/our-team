import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function People(props){

    // let sigil = "";
    // if (props.house === "Stark") {
    //   console.log('stark', props.house);
    //   sigil = "../assets/images/stark.jpg";
    // } else if (props.house === "Targaryan") {
    //   sigil = "../assets/images/stark.jpg";
    // }
    const living = props.alive;
    console.log(props.alive);
    console.log(living);

    return (
        <div>
          <Link to='./Profile'>
            <img className="picture"
              src={require(`../assets/images/${props.image}`)}></img></Link>
            <h3>{props.name}  <br/> <span> of House {props.house}</span></h3>
            <p><em>{props.description}</em></p>

            { living ? <p className="alive"> I still live</p> : <p>Questionable</p>}


            <img className="sigil" src={require(`../assets/images/${props.house}.jpg`)}></img>
            <style jsx>{`
                div {
                    color: #444;
                    position: relative;
                    margin: 20px 30px;
                }
                .alive {
                  font-style: italic;
                  margin: 0;
                  padding: 0;
                }
                .picture {
                  height: 100px;
                  width: 100px;
                  border-radius: 50px;
                  cursor: crosshair;
                }
                span {
                  font-style: italic;
                  font-size: 0.8em;
                }
                .sigil {
                  position: absolute;
                  width: 100px;
                  height: 100px;
                  bottom: 0px;
                  left: 24%;
                  z-index: -1;
                  opacity: 0.2;
                }

            `}</style>
        </div>
    );
}

People.propTypes = {
    name: PropTypes.string,
    house: PropTypes.string,
    description: PropTypes.string,
    alive: PropTypes.bool,
    image: PropTypes.image
};


export default People;
