import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/main/HomePage.jsx";
import AuthPage from "../pages/AuthPage/AuthPage.jsx";
import PersonalAccount from "../pages/Account/PersonalAccount.jsx";
import RegisterPages from "../pages/RegisterPage/RegisterPages.jsx";

const AppRoutes = () => {

    return (
        <BrowserRouter basename={'/'}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<AuthPage/>}/>
                <Route path='/account' element={<PersonalAccount/>}/>
                <Route path='/register' element={<RegisterPages/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;

