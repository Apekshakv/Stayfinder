import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Hotel from './componets.js/List.js/defult';
import { Header } from './componets.js/Header.js/Header';
import Hotels from './componets.js/List.js/mock';
import { Stayfinder } from './Stayfinder';
import { City } from './city';
import Delhi from './componets.js/List.js/Delhi';
import Hotelm from './componets.js/List.js/Mumbai';
const AppRoutes = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path="/goa" element={<Hotel/>} />
        <Route path="/chennai" element={<Hotels/>} />
        <Route path="/search" element={< Header/>} />
       <Route path="/" element={< Stayfinder/>} />
        <Route path="/city" element={< City/>} />
        <Route path="/delhi" element={< Delhi/>} />
        <Route path="/mumbai" element={< Hotelm/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;