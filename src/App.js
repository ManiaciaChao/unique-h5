import React, { Component } from 'react';
import Navbar from './Navbar';
import Bottle, { BottleTable } from './Bottle';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <BottleTable />
                {/* <Bottle /> */}
            </div>
        );
    }
}

export default App;
