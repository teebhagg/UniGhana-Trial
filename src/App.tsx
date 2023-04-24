import React from 'react';
import './index.css';
import HomaPage from './pages/home_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login_page';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomaPage/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
