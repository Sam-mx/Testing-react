import React from 'react';
import { useState } from 'react';


function BMI() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [message, setMessage] = useState('');
    const [bmi, setBMI] = useState('');

    function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);

    if (bmi < 16) {
      setMessage('Severe Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 16 && bmi < 17) {
      setMessage('Moderate Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 17 && bmi < 18.5) {
      setMessage('Mild Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 18.5 && bmi < 25) {
      setMessage('Healthy weight. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 25 && bmi < 30) {
      setMessage('Overweight. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 30 && bmi < 35) {
      setMessage('Obese Class I. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 35 && bmi < 40) {
      setMessage('Obese Class II. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 40) {
      setMessage('Obese Class III. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    }
    }  

  return (
    <div className='bmiform'>
      <h1>BMI Calculator</h1>
      <span>Let's calculate your Body Mass Index. <br></br> Type the values below</span>
      <div className="area-input">
        <input
          value={weight}
          type="text"
          placeholder="Weight (in kg)"
          onChange={ (e) => setWeight(e.target.value)}
        />

        <input
          value={height}
          type="text"
          placeholder="Height (in cm)"
          onChange={ (e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>
          Calculate
        </button>

      </div>
      <h2> {message} {bmi} </h2>
    </div>
  )
}

export default BMI
