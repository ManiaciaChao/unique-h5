import React, { Component } from 'react';
import Navbar from './Navbar';
import Bottle, { BottleTable, BottleTest } from './Bottle';
import { StartPage, MenuPage } from './StartPage';
import pageState from './pageState';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // console.log('!');
        this.state = { page: pageState.startPage };
    }
    setPage(num) {
        if (this.state.page === num) {
            return;
        }
        this.setState({ page: num });
    }
    switchMenu() {
        console.table(this.state);
        this.setState({ page: pageState.homePage });
    }
    render() {
        // console.log(this.switchHome);

        // return (
        //     <div className="App" onClick={this.switchMenu.bind(this)}>
        //         <BottleTest />
        //     </div>
        // );

        const Nav = (
            <Navbar setPage={num => this.setPage(num)} page={this.state.page} />
        );
        switch (this.state.page) {
            case pageState.startPage:
                return (
                    <div className="App" onClick={this.switchMenu.bind(this)}>
                        <StartPage />
                    </div>
                );
                break;
            case pageState.homePage:
                return (
                    <div className="App">
                        <MenuPage setPage={num => this.setPage(num)} />
                    </div>
                );
                break;
            case pageState.room811:
                return (
                    <div className="App">
                        {Nav}
                        <BottleTable room="811" group={pageState.web} />
                    </div>
                );

                break;
            case pageState.room810:
                return (
                    <div className="App">
                        {Nav}
                        <BottleTable room="810" group={pageState.ai} />
                    </div>
                );

                break;
            case pageState.room809:
                return (
                    <div className="App">
                        {Nav}
                        <BottleTable room="809" group={pageState.android} />
                    </div>
                );

                break;
            case pageState.room808:
                return (
                    <div className="App">
                        {Nav}
                        <BottleTable room="808" group={pageState.lab} />
                    </div>
                );

                break;
            default:
                break;
        }
    }
}

export default App;
