import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DestinationPage from './DestinationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/destination' element={<DestinationPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
