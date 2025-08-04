import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Evaluations from "./components/evaluations";
import Recommendations from "./components/recommendations";
import Participants from "./components/participants";
import Collections from "./components/collections";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/evaluations" element={<Evaluations />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/participants" element={<Participants />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
