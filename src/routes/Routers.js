import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import FoodDetailsPage from '../pages/FoodDetailsPage/FoodDetailsPage';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/foods" element={<FoodDetailsPage />} />
        </Routes>
    );
};

export default Routers;
