import React, { Component } from 'react';
import './Navbar.css';
import logo from './ui/unique-studio@2x.png';
import home from './romzicon_home-512.png';

const config = {};

class NavbarHome extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="NavbarHome">
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
    }
    render() {
        return (
            <div className="Navbar">
                <NavbarHome />
                <NavbarText text="代号AI" />
                <NavbarLogo />
                {/* <p>Something Will Appear Here.</p> */}
            </div>
        );
    }
}

export default Navbar;
