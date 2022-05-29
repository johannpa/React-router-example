import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, link } from 'react-router-dom';
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
