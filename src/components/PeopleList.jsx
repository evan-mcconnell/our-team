import React from 'react';
import People from './People';
import Profile from './Profile';
import { Switch, Route } from 'react-router-dom';


var masterPeopleList = [
    {
        name: 'Jon',
        house: 'Stark',
        description: 'King in the North?',
        alive: true,
        image: 'arya.jpeg'
    },
    {
        name: 'Cerci',
        house: 'Lannister',
        description: 'Be cruel',
        alive: true,
        image: 'cerci.jpeg'
    },
    {
        name: 'Dany',
        house: 'Targaryan',
        description: 'Valar doharis',
        alive: true,
        image: 'dany.jpeg'
    }
  ];

  var otherPeopleList = [
    {
        name: 'Arya',
        house: 'Stark',
        description: 'No-one',
        alive: true,
        image: 'arya.jpeg'
    },
    {
        name: 'Sansa',
        house: 'Stark',
        description: 'Be smart',
        alive: true,
        image: 'sansa.jpeg'
    },
    {
        name: 'Jamie',
        house: 'Lannister',
        description: 'Azor Ahai',
        alive: true,
        image: 'cerci.jpeg'
    },
    {
        name: 'Tyrion',
        house: 'Lannister',
        description: 'The Hand',
        alive: true,
        image: 'cerci.jpeg'
    },
    {
        name: 'Aegon',
        house: 'Targaryan',
        description: 'Prince Who Was Promised',
        alive: false,
        image: 'dany.jpeg'
    },
    {
        name: 'Bran',
        house: 'Stark',
        description: 'You Looked So Beautiful',
        alive: false,
        image: 'sansa.jpeg'
    },
];

function PeopleList() {

    return(
        <div>
            <div className="top">
              {masterPeopleList.map((person, index) =>
                <People name={person.name}
                  house={person.house}
                  description={person.description}
                  alive={person.alive}
                  image={person.image}
                  key={index} />
              )}
            </div>
            <hr/>
            <div className="rest">
              {otherPeopleList.map((person, index) =>
                <People name={person.name}
                  house={person.house}
                  description={person.description}
                  alive={person.alive}
                  image={person.image}
                  key={index} />
              )}
            </div>
            <style jsx>{`
                .top {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  margin-top: 50px;
                  text-align: center;
                  width: 100%;
                }
                hr {
                  border: 2px solid #888;
                  width: 80%;
                }
                .rest {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-around;
                  flex-wrap: wrap;
                  margin-top: 50px;
                  text-align: center;
                  margin: 50px;
                }
                  `}</style>
        </div>
    );
}

export default PeopleList;
