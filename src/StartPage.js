import React, { Component } from 'react';
import './StartPage.css';
import crystal from './ui/crystal.gif';

class Crystal extends Component {
    render() {
        return <img src={crystal} />;
    }
}

class StartPage extends Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        alert('!');
    }
    render() {
        const time = Date.now()
            .toString()
            .substr(6, 4);
        return (
            <div className="StartPage" onClick={this.handleClick}>
                <StartPageItem text="欢迎登入" />
                <StartPageItem text="联创X实验室" />
                <StartPageItem text="实验生物管理系统" />
                <StartPageItem text={`来访者编号：${time}`} />
                <StartPageItem text="准许进入" />
                <Crystal />
                <StartPageItem text="点击进入系统" />
            </div>
        );
    }
}

class StartPageItem extends Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }
    render() {
        return <li>{this.text}</li>;
    }
}

class MenuPage extends Component {
    render() {
        return (
            <div className="MenuPage">
                <MenuPageTitle />
                <MenuPageItem room="808" groups={['Game', 'iOS', 'Android']} />
                <MenuPageItem room="809" groups={['Design', 'PM']} />
                <MenuPageItem room="810" groups={['Lab', 'AI']} />
                <MenuPageItem room="811" groups={['Web']} />
            </div>
        );
    }
}

class MenuPageTitle extends Component {
    render() {
        return (
            <div className="MenuPageTitle">
                <Crystal />
                <h2>选择你要参观的生态系统</h2>
            </div>
        );
    }
}

class MenuPageItem extends Component {
    constructor(props) {
        super(props);
        this.room = props.room;
        this.groups = props.groups;
    }
    render() {
        return (
            <div className="MenuPageItem">
                <h1>{this.room}</h1>
                <p>{`生物种群：${this.groups.join(', ')}`}</p>
            </div>
        );
    }
}

export { StartPage, MenuPage };
