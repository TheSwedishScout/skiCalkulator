import React, { useEffect, useState } from 'react';

import { calculateSkiLength } from './calculateSkies';

import './SkiCalculator.scss'
import { SkiMan } from './SkiMan';

export const SkiCalculator = () => {
  const [length, setLength] = useState('');
  const [age, setAge] = useState(30);
  const [style, setStyle] = useState('classic');
  const [skiLengthMessage, setSkiLengthMessage] = useState('');

  useEffect(() => {
    const [skiLengthCalculated, calculatedDiff] = calculateSkiLength(age, length, style)
    setSkiLengthMessage(skiLengthCalculated === 0 || length === 0 || length === '' || age === 0 || age === '' ? (
      <p>Please enter Age, Length and Style to calculate ski length</p>
      ) : (
      <strong className="ski-length">{`${skiLengthCalculated} ${calculatedDiff > 0 ? `to ${skiLengthCalculated + calculatedDiff}` : ''}cm`}</strong>
    ))
  }, [length, age, style]);

  return <div className="ski-calculator">
    <div className="user-input">
      <label className="input input-age">
        Age
        <select value={age} onChange={(event) => setAge(event.target.value)}>
          <option value="3" >0-4 years</option>
          <option value="7" >5-8 years</option>
          <option value="30" >9+ years</option>
        </select>
      </label>
      <label className="input inout-length">
        Length
        <input type="number" value={length} onChange={(event) => setLength(event.target.value)} placeholder="Length" min="0" max="300"/>
      </label>
      <label className="input input-type">
        Style
        <select onChange={(event) => setStyle(event.target.value)}>
          <option value="classic">Classic</option>
          <option value="freestyle">Freestyle</option>
        </select>
      </label>
    </div>
    <div className="length-info-aria">
      <div className="length-info">
        {skiLengthMessage}
      </div>
      <SkiMan />

    </div>
  </div>;
};
