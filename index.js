import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {useFetch} from './useFetch';

const App=()=>{
 const {data, loading}= useFetch(`http://numbersapi.com/43/trivia`);

  return (
    <div>
    {loading?'...loading':data}
    </div>
  )
}

render(<App />, document.getElementById('root'));
