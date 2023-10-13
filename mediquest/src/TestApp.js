// import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [data, setData] = useState(null);

//   const sendSymptomsToServer = async (selectedSymptoms) => {
//     try {
//       const response = await fetch('http://localhost:5000/suggest_diseases', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ selected_symptoms: selectedSymptoms }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       setData(data);

//       } catch (error) {
//       console.error('There was a problem with the fetch operation:', error.message);
//     }
//   };

//   useEffect(() => {
//     const selectedSymptoms = ['symptom1', 'symptom2'];
//     sendSymptomsToServer(selectedSymptoms);
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Data from Flask: {data && data.suggested_diseases}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
