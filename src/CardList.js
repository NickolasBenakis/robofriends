import React from 'react';
// import './cardList.css';
import Card from './Card';

export default function CardList({ robots }) {

  return (
    <div>
      {
        robots.map(user => {
          return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
        })
      }
    </div>
  );
}

