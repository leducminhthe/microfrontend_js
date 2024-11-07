import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Page1, Chat, Project} from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
