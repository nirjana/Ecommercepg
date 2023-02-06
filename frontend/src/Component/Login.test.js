import {render} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "../redux/store";
import Login from "./Login";
import { Home } from './Home';

test('testing', () => {
    render(
        <Provider store={store}>
        <BrowserRouter>
            <Routes>  
            <Route path="/" element= {<Home />}/> 
                <Route path="/login" element= {<Login />}/>
            </Routes>
        </BrowserRouter>
        </Provider>
            );
    expect(true).toBe(true)
    })