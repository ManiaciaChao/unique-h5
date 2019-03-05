import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './StartPage.css';
import crystal from './ui/crystal.gif';
import pageState from './pageState';

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
        alert('!2');
    }
    render() {
        const time = Date.now()
            .toString()
            .substr(6, 4);
        return (
            <div className="StartPage">
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
    constructor(props) {
        super(props);
        this.setPage = props.setPage;
        console.table(this.setPage);
    }
    render() {
        console.log(this.setPage);
        return (
            <div className="MenuPage">
                <MenuPageTitle />
                <MenuPageItem
                    room="808"
                    setPage={num => this.setPage(num)}
                    groups={['Game', 'iOS', 'Android']}
                />
                <MenuPageItem
                    room="809"
                    groups={['Design', 'PM']}
                    setPage={num => this.setPage(num)}
                />
                <MenuPageItem
                    room="810"
                    groups={['Lab', 'AI']}
                    setPage={num => this.setPage(num)}
                />
                <MenuPageItem
                    room="811"
                    groups={['Web']}
                    setPage={num => this.setPage(num)}
                />
            </div>
        );
    }
}

class LoadingPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="LoadingPage">
                <h2>正在为你调取生物资料</h2>
                <Crystal />
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
        this.setPage = props.setPage;
        // console.table(this.props);
    }
    handleClick() {
        // console.log(this.room);
        switch (this.room) {
            case '811':
                this.setPage(pageState.room811);
                break;
            case '810':
                this.setPage(pageState.room810);
                break;
            case '809':
                this.setPage(pageState.room809);
                break;
            case '808':
                this.setPage(pageState.room808);
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <div className="MenuPageItem" onClick={this.handleClick.bind(this)}>
                <h1>{this.room}</h1>
                <p>{`生物种群：${this.groups.join(', ')}`}</p>
            </div>
        );
    }
}

export { StartPage, MenuPage, LoadingPage };
