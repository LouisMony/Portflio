import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './App';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import reportWebVitals from './reportWebVitals';
import AllProjects from './pages/AllProject';

import Cursor from './components/cursor';
import ProjectSneakers from './pages/ProjectSneakers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
    <Routes>
      <Route path="/about-me" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/projects" element={<AllProjects />}></Route>
      <Route path="/sneakers" element={<ProjectSneakers />}></Route>
    </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
