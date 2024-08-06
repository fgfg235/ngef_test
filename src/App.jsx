import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo.jsx';
import About from './pages/about/About.jsx';
import Schedule from './pages/schedule/Schedule.jsx';
import Session from './pages/session/Sessions.jsx';
import RegistForum from './pages/registForum/RegistForum.jsx';

function App() {
  
  return (
      <Routes>
          <Route path="/" element={<HomeOne />} />
          <Route path="board" element={<HomeTwo />} >
            <Route path="About" element={<About />} />
            <Route path="Schedule" element={<Schedule />} />
            <Route path="Session" element={<Session />} />
            <Route path="RegistForum" element={<RegistForum />} />
            <Route index element={<About />} />
          </Route>
      </Routes>
  );
}

export default App;