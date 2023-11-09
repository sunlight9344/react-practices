import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';

import {SiteLayout} from './layout'

import Main from "./component/Main";
import {Gallery} from "./component/gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import Error404 from "./component/error/Error404";
import Error from "./component/error/Error";

import Join from "./component/user/Join";
import Login from "./component/user/Login";
import Settings from "./component/user/Settings";

import './assets/scss/App.scss'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SiteLayout />}>
                    <Route index path='' element={<Main />}/>
                    <Route path='gallery' element={<Gallery />}/>
                    <Route path='guestbook' element={<Guestbook />}/>
                    <Route path='about' element={<About />}/>
                    <Route path='user/join' element={<Join />}/>
                    <Route path='user/login' element={<Login />}/>
                    <Route path='user/settings' element={<Settings />}/>
                    <Route path='error' element={<Error />}/>
                    <Route path='*' element={<Error404 />}/>
                </Route>
            </Routes>
        </Router>
    );
}