import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/main/HomePage.jsx";
import AuthPage from "../components/AuthPage/AuthPage.jsx";

const AppRoutes = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<AuthPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

