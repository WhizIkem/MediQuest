import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch symptoms
    fetch('http://localhost:5000/get_symptoms')
      .then(response => response.json())
      .then(symptomsData => {
        console.log(symptomsData); // Log the symptoms data
        // Handle the symptoms data
        setData(symptomsData);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Display your symptoms here */}
          {data && data.symptoms && (
            <ul>
              {data.symptoms.map(symptom => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          )}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

