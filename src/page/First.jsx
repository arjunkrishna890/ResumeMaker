import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './First.scss';
import { Input, Form } from 'semantic-ui-react';
import { setData } from '../store/dataslice';
import { useSelector } from 'react-redux';

function First({ setFormComplete }) {
  const [inputValue, setInputValue] = useState('');
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch(setData(e.target.value));
    setFormComplete(inputValue.trim() !== '');
  };

  return (
    <div className="container">
      <div className="intro">{/* Intro content */}</div>
      <div className="input">
        <Input
          inverted
          placeholder="Enter your Name"
          size="massive"
          value={data.personal.name}
          onChange={handleInputChange}
          required
        />
      </div>
    </div>
  );
}

export default First;
