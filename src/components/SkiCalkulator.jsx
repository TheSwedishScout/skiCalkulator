import React, { useEffect, useState } from 'react';
import { calculateSkiLength } from './calculateSkies';

export const SkiCalkulator = () => {
  const [length, setLength] = useState('');
  const [age, setAge] = useState('');
  const [style, setStyle] = useState('classic');
  const [skiLengthMessage, setSkiLengthMessage] = useState('');

  useEffect(() => {
    const [skiLengthCalculated, calculatedDiff] = calculateSkiLength(age, length, style)
    setSkiLengthMessage(skiLengthCalculated === 0 || length === 0 || length === '' || age === 0 || age === '' ? (
      <p>Please enter Age, Length and Style to calculate ski length</p>
      ) : (
      <>
        <p>You should have skis that are</p>
        <p>{skiLengthCalculated} {calculatedDiff > 0 ? `to ${skiLengthCalculated + calculatedDiff}` : ''} cm</p>
        <p>long</p>
      </>
    ))
  }, [length, age, style]);
  


  return <div>
    <div className="user-input">
      <label>
        Age
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} placeholder="age" min="0" max="120"/>
      </label>
      <label>
        Length
        <input type="number" value={length} onChange={(event) => setLength(event.target.value)} placeholder="Length in cm" min="0" max="300"/>
      </label>
      <label>
        Style
        <select onChange={(event) => setStyle(event.target.value)}>
          <option value="classic">Classic</option>
          <option value="freestyle">Freestyle</option>
        </select>
      </label>
    </div>

    {skiLengthMessage}
  </div>;
};
