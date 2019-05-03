import React from 'react';
import './CardList.css';
import Card from './Card';

export default function CardList({ robots }) {

  // const cardsArray = robots.map(user => {
  //   return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
  // })

  return (
    <div className="App">
      {
        robots.map(user => {
          return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
        })
      }
    </div>
  );
}

