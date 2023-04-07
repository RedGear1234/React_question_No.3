import React, { useState } from 'react';
import './style.css';
import { List } from './List';

export default function App() {
  const sports = [
    'Basketball',
    'Football',
    'Soccer',
    'Tennis',
    'Golf',
    'Baseball',
    'Swimming',
    'Volleyball',
    'Hockey',
    'Boxing',
    'MMA',
    'Cricket',
    'Rugby',
    'Badminton',
    'Table Tennis',
    'Track and Field',
    'Weightlifting',
    'Cycling',
    'Rowing',
    'Fencing',
  ];

  return (
    <div>
        <List items={sports}/>
    </div>
  );
}
