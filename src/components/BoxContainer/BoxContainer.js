import React, { useState } from 'react';
import { CardContext } from './CardContext';
import Box from '../Box/Box';
import Input from '../Input/Input';
import './BoxContainer.css';

function BoxContainer() {
  const initialString = '';
  const [str, setStr] = useState(initialString);
  return (
    <CardContext.Provider value={{ str, setStr }}>
      <div className="main" id="box-container">
        <Input />
        <Box />
      </div>
    </CardContext.Provider>
  );
}

export default BoxContainer;
