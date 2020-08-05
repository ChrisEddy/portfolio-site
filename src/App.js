import React from 'react';
import Nav from './Nav';
import 'antd/dist/antd.min.css';
import './App.scss';
import Scene from './Scene';

const App = props => {
    return (
        <>
            <Nav />
            <Scene />
        </>
    )
}
export default App;