import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {Routes, Route} from 'react-router';
import { useRoutes } from 'react-router';

import Main from "./component/Main";
import {Gallery} from "./component/gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import Error404 from "./component/error/Error404";

import Join from "./component/user/Join";
import Login from "./component/user/Login";
import Settings from "./component/user/Settings";

import './assets/scss/App.scss'

export default function App() {

    return useRoutes([
        {path:'/', element:<Main />},
        {path:'/gallery', element:<Gallery />},
        {path:'/guestbook', element:<Guestbook />},
        {path:'/about', element:<About />},
        {path:'/user/join', element:<Join />},
        {path:'/user/login', element:<Login />},
        {path:'/user/settings', element:<Settings />},
        {path:'*', element:<Error404 />},
    ]);

}