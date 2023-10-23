import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Components/Pages/Homepage";
import SymptomChecker from "./Components/Pages/SymptomCheckerPage";
import "./App.css";
import SymptomCheckerPage from "./Components/Pages/SymptomCheckerPage";
import DiseasesPage from "./Components/Pages/DiseasesPage";
import AboutUs from "./Components/Pages/AboutUs";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route>
              <Route path="/" element={<Homepage />} />
              <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
              <Route path="/diseases" element={<DiseasesPage />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Route>
            </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
