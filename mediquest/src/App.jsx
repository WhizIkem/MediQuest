import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Components/Pages/Homepage"; // Import your HomePage component
// Import other pages/components as needed

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Homepage />} />
            {/* Add other routes as needed */}
          </Route>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
