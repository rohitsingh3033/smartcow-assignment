import React, { useContext } from 'react';
import { CardContext } from '../BoxContainer/CardContext';
import './Box.css';

const mapStringToBoxes = str => {
  const ret = str.map((el, index) => {
    return (
      <li className="box" key={index}>
        <span>{el}</span>
      </li>
    );
  });
  return ret;
}

function Box() {
  const { str } = useContext(CardContext);
  const boxes = mapStringToBoxes(str.replace(/\s/g, "").split(''));
  return (
    <div>
      <ul className="boxMain" aria-label="boxes">
        {str.length ? boxes : ''}
      </ul>
    </div>
  );
}

export default Box;
