import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
//pamiętać proszę o imporcie komponentu Posts oraz Home
import Home from './components/home';
import Posts from './components/posts';
import LoginForm from "./components/loginForm";
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>

                    <Route path="home" element={<Home/>}/>

                    <Route path="posts" element={<Posts/>}/>
                    <Route path="login" element={<LoginForm/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
