import React, { useState } from 'react';
import styles from '../../styles/projectcode.module.css';

const TemperatureConverter = () => {
  const [kelvin, setKelvin] = useState('');
  const [results, setResults] = useState(null);

  const handleConvert = () => {
    const kelvinValue = parseFloat(kelvin);
    if (isNaN(kelvinValue)) {
      alert('Please enter a valid number');
      return;
    }

    const celsius = kelvinValue - 273;
    const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
    const newton = Math.floor(celsius * (33 / 100));

    setResults({ fahrenheit, newton, celsius });
  };

  return (
    <div className={styles.landing}>
      <h2>Interactive Temperature Converter</h2>
      <div className={styles.main}>
        <label>
          Enter temperature in Kelvin:<br/>
          <input
            type="number"
            value={kelvin}
            onChange={(e) => setKelvin(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={handleConvert}
      >
        Convert
      </button>
      {results && (
        <div className={styles.results}>
          <p><strong>Celsius:</strong> {results.celsius}°C</p>
          <p><strong>Fahrenheit:</strong> {results.fahrenheit}°F</p>
          <p><strong>Newton:</strong> {results.newton}°N</p>
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;