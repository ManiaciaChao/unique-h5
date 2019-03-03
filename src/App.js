import React, { Component } from 'react';
import Navbar from './Navbar';
import Bottle, { BottleTable } from './Bottle';
import { StartPage, MenuPage } from './StartPage';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }
    pageShow(num) {}
    render() {
        return (
            <div className="App">
                <StartPage />
                <MenuPage />
                {/* <Navbar /> */}
                {/* <BottleTable /> */}
                {/* <Bottle /> */}
            </div>
        );
    }
}

export default App;
