import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes,Route, BrowserRouter as Router} from 'react-router-dom';

// components
import Home from './components/Home';
import Q1 from './components/Q1';
import Q2 from './components/Q2';
import Q3 from './components/Q3';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/q3" element={<Q3/>}></Route>
        <Route exact path="/q2" element={<Q2/>}></Route>
        <Route exact path="/q1" element={<Q1/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
