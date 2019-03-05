import React, { Component } from 'react';
import './Navbar.css';
import logo from './ui/unique-studio@2x.png';
import home from './romzicon_home-512.png';
import pageState from './pageState';

const config = {};

class NavbarHome extends Component {
    constructor(props) {
        super(props);
        this.setPage = props.setPage;
    }
    render() {
        return (
            <div
                className="NavbarHome"
                onClick={() => {
                    this.setPage(pageState.homePage);
                }}
            >
                <img src={home} />
            </div>
        );
    }
}

class NavbarText extends Component {
    render() {
        return <p className="NavbarText"> {this.props.text}</p>;
    }
}

class NavbarLogo extends Component {
    constructor(props) {
        super(props);
        this.setPage = props.setPage;
    }
    render() {
        return <div className="NavbarLogo">{<img src={logo} />}</div>;
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        };
        this.setPage = props.setPage;
        this.textMap = new Map([
            [pageState.room811, 'Web'],
            [pageState.room810, 'AI'],
            [pageState.room809, 'Android'],
            [pageState.room808, 'Lab']
        ]);
    }
    render() {
        // alert(this.props.page);
        return (
            <div className="Navbar">
                <NavbarHome setPage={num => this.setPage(num)} />
                <NavbarText
                    text={`代号 ${this.textMap.get(this.props.page)}`}
                />
                <NavbarLogo setPage={num => this.setPage(num)} />
                {/* <p>Something Will Appear Here.</p> */}
            </div>
        );
    }
}

export default Navbar;
