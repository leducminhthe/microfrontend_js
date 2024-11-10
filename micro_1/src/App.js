import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import {Page1, Chat, Project, ProjectKanban} from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project-kanban" element={<ProjectKanban />} />
      </Routes>
    </Router>
  );
}

export default App;
