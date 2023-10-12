import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Components/Pages/Homepage";
import SymptomChecker from "./Components/Pages/SymptomChecker";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route>
              <Route path="/" element={<Homepage />} />
              <Route path="/symptom-checker" element={<SymptomChecker />} />
            </Route>
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
