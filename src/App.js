import React from 'react';
import './App.css';
import BMI from './components/bmicalculator';
import Timer from './components/timer';

function App() {
  return (
   <div className="Testing">

    <h2 className='heading'>Sam's React Testings</h2>
    <div className='BMI'>
    <BMI /> 
    </div>

    <div className='watch'>
    <Timer />
    </div>
   </div>
  );
}

export default App;
