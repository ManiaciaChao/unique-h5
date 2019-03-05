import React, { Component } from 'react';
import { Motion, spring, presets, TransitionMotion } from 'react-motion';
import './Bottle.css';
import { green } from 'ansi-colors';
import bottleImg from './ui/bottle@2x.png';
import web from './web/index';
import ai from './ai/index';
import android from './android/index';
import lab from './lab/index';
import pageState from './pageState';
import { LoadingPage } from './StartPage';

const sigmoid = x => {
    return 1 / (1 + Math.exp(-x));
};

class BottleInfo extends Component {
    render() {
        return (
            <div className="BottleInfo">
                <div className="BottleInfoText">
                    {/* <h2>Web</h2> */}
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

class BottleTest extends Component {
    render() {
        return (
            <div className="BottleTable">
                <BottleLab />
                {/* <BottleAndroid /> */}
                {/* <BottleWeb /> */}
                <BottleTableBg />
            </div>
        );
    }
}

class BottleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgnTime: Date.now(),
            duration: 0
        };
        this.map = new Map([
            [pageState.ai, <BottleAI />],
            [pageState.lab, <BottleLab />],
            [pageState.android, <BottleAndroid />],
            [pageState.web, <BottleWeb />]
        ]);
    }
    handleTimer() {
        this.setState({
            duration: (Date.now() - this.state.bgnTime) / 1000
        });
    }
    get duration() {
        return this.state.duration;
    }
    componentDidMount() {
        this.interval = setInterval(this.handleTimer.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        const bottleGroup = this.map.get(this.props.group);
        console.table(<BottleWeb />);
        return this.duration <= 4 ? (
            <LoadingPage />
        ) : (
            <div className="BottleTable">
                {bottleGroup}
                <BottleTableBg />
            </div>
        );
    }
}

class BottleTableBg extends Component {
    render() {
        return <div className="BottleTableBg" />;
    }
}

class Bottle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgnTime: Date.now(),
            duration: 0
        };
    }
    handleTimer() {
        this.setState({
            duration: (Date.now() - this.state.bgnTime) / 1000
        });
    }
    get duration() {
        return this.state.duration;
    }
    componentDidMount() {
        this.interval = setInterval(this.handleTimer.bind(this), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

class BottleWeb extends Bottle {
    constructor(props) {
        super(props);
        this.text = `VirtualXposed is a simple APP based on VirtualApp and epic that allows you to use an Xposed Module without needing to root, unlock the bootloader, or flash a custom system image. (Supports Android 5.0~9.0)`;
    }
    render() {
        const imgSet = web;
        return (
            <div>
                <Motion
                    defaultStyle={{ y: 600 }}
                    style={{ y: spring(0, { stiffness: 64, damping: 4 }) }}
                >
                    {value => (
                        <div
                            className="Bottle"
                            style={{
                                // marginTop: `${value.y}px`
                                transform: `translate3D(0,${value.y * 0.5}px,0)`
                            }}
                        >
                            <img className="BottleItself" src={bottleImg} />
                            <img
                                className="BottleFg"
                                src={imgSet.layer3}
                                style={{
                                    // zIndex: -1,
                                    width: '45vw',
                                    marginLeft: '27vw',
                                    marginTop: '36vw',
                                    transform: `translateY(${value.y * 0.8}px)`
                                }}
                            />
                            <img
                                className="BottleFg"
                                src={imgSet.layer5}
                                style={{
                                    // zIndex: 2,
                                    width: '65vw',
                                    marginLeft: '20vw',
                                    marginTop: '21vw',
                                    transform: `translateY(${value.y * 1}px)`
                                }}
                            />
                        </div>
                    )}
                </Motion>
                {this.duration >= 2.5 ? (
                    <Motion
                        defaultStyle={{ y: 600 }}
                        style={{
                            y: spring(0, { stiffness: 64, damping: 4 })
                        }}
                    >
                        {value => (
                            <div className="Bottle">
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer1}
                                    style={{
                                        zIndex: 2,
                                        transform: `translate3D(0,${value.y *
                                            0.3}px,0)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer2}
                                    style={{
                                        // zIndex: -1,
                                        width: '20vw',
                                        paddingLeft: '6vw',
                                        paddingTop: '26vw',
                                        transform: `translate3D(0,${value.y *
                                            0.2}px,0)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer4}
                                    style={{
                                        // zIndex: 2,
                                        width: '65vw',
                                        marginLeft: '20vw',
                                        marginTop: '21vw',
                                        transform: `translate3D(0,${value.y *
                                            0.2}px,0)`
                                    }}
                                />
                            </div>
                        )}
                    </Motion>
                ) : (
                    <div />
                )}
                <BottleInfo text={this.text} />
            </div>
        );
    }
}

class BottleAndroid extends Bottle {
    constructor(props) {
        super(props);
        this.text = `VirtualXposed is a simple APP based on VirtualApp and epic that allows you to use an Xposed Module without needing to root, unlock the bootloader, or flash a custom system image. (Supports Android 5.0~9.0)`;
    }
    render() {
        const imgSet = android;
        return (
            <div>
                <Motion
                    defaultStyle={{ y: 600 }}
                    style={{ y: spring(0, { stiffness: 64, damping: 4 }) }}
                >
                    {value => (
                        <div
                            className="Bottle"
                            style={{
                                // marginTop: `${value.y}px`
                                transform: `translate3D(0,${value.y * 0.5}px,0)`
                            }}
                        >
                            <img className="BottleItself" src={bottleImg} />
                            <img
                                className="BottleFg"
                                src={imgSet.layer2}
                                style={{
                                    // zIndex: -1,
                                    // zIndex: 2,
                                    width: '60vw',
                                    marginLeft: '20vw',
                                    marginTop: '21vw',
                                    transform: `translateY(${value.y * 1}px)`
                                }}
                            />
                            <img
                                className="BottleFg"
                                src={imgSet.layer3}
                                style={{
                                    width: '38vw',
                                    marginLeft: '25vw',
                                    marginTop: '25vw',
                                    transform: `translateY(${value.y * 0.8}px)`
                                }}
                            />
                        </div>
                    )}
                </Motion>
                {this.duration >= 2.5 ? (
                    <Motion
                        defaultStyle={{ y: 600 }}
                        style={{
                            y: spring(0, { stiffness: 64, damping: 4 })
                        }}
                    >
                        {value => (
                            <div className="Bottle">
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer1}
                                    style={{
                                        zIndex: 2,
                                        width: '36vw',
                                        marginLeft: '36vw',
                                        marginTop: '43vw',
                                        transform: `translate3D(0,${value.y *
                                            0.3}px,0)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer4}
                                    style={{
                                        zIndex: 2,
                                        width: '30vw',
                                        marginLeft: '59vw',
                                        marginTop: '42vw',
                                        transform: `translate3D(0,${value.y *
                                            0.2}px,0)`
                                    }}
                                />
                            </div>
                        )}
                    </Motion>
                ) : (
                    <div />
                )}
                <BottleInfo text={this.text} />
            </div>
        );
    }
}

class BottleLab extends Bottle {
    constructor(props) {
        super(props);
        this.text = `VirtualXposed is a simple APP based on VirtualApp and epic that allows you to use an Xposed Module without needing to root, unlock the bootloader, or flash a custom system image. (Supports Android 5.0~9.0)`;
    }
    render() {
        const imgSet = lab;
        return (
            <div>
                {this.duration >= 3.5 ? (
                    <div
                        className="Bottle"
                        style={{
                            // marginTop: `${value.y}px`
                            transform: `translate3D(0,0,0)`
                        }}
                    >
                        <img className="BottleItself" src={bottleImg} />
                        <img
                            className="BottleFg"
                            src={imgSet.layer3}
                            style={{
                                animation: 'rotation 8s linear infinite',
                                width: '70vw',
                                marginLeft: '16vw',
                                marginTop: '27vw'
                            }}
                        />
                        <img
                            className="BottleFg"
                            src={imgSet.layer4}
                            style={{
                                animation: 'rotation 8s linear infinite',
                                animationDirection: 'reverse',
                                zIndex: 0,
                                width: '55vw',
                                marginLeft: '23vw',
                                marginTop: '34vw'
                            }}
                        />
                    </div>
                ) : (
                    <Motion
                        defaultStyle={{ y: 600 }}
                        style={{ y: spring(0, { stiffness: 64, damping: 4 }) }}
                    >
                        {value => (
                            <div
                                className="Bottle"
                                style={{
                                    // marginTop: `${value.y}px`
                                    transform: `translate3D(0,${value.y *
                                        0.5}px,0)`
                                }}
                            >
                                <img className="BottleItself" src={bottleImg} />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer3}
                                    style={{
                                        width: '70vw',

                                        marginLeft: '16vw',
                                        marginTop: '27vw',
                                        transform: `translateY(${value.y *
                                            0.8}px)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer4}
                                    style={{
                                        zIndex: 0,
                                        width: '55vw',
                                        marginLeft: '23vw',
                                        marginTop: '34vw',
                                        transform: `translate3D(0,${value.y *
                                            1}px,0)`
                                    }}
                                />
                            </div>
                        )}
                    </Motion>
                )}

                {this.duration >= 2.5 ? (
                    <Motion
                        defaultStyle={{ y: 600 }}
                        style={{
                            y: spring(0, { stiffness: 64, damping: 4 })
                        }}
                    >
                        {value => (
                            <div className="Bottle">
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer1}
                                    style={{
                                        zIndex: 0,
                                        width: '30vw',
                                        marginLeft: '38vw',
                                        marginTop: '45vw',
                                        transform: `translate3D(0,${value.y *
                                            0.3}px,0)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer2}
                                    style={{
                                        zIndex: 15,
                                        width: '25vw',
                                        marginLeft: '32vw',
                                        marginTop: '50vw',
                                        transform: `translateY(${value.y *
                                            1}px)`
                                    }}
                                />
                            </div>
                        )}
                    </Motion>
                ) : (
                    <div />
                )}
                <BottleInfo text={this.text} />
            </div>
        );
    }
}

class BottleAI extends Bottle {
    constructor(props) {
        super(props);
        this.text = `VirtualXposed is a simple APP based on VirtualApp and epic that allows you to use an Xposed Module without needing to root, unlock the bootloader, or flash a custom system image. (Supports Android 5.0~9.0)`;
    }
    render() {
        const imgSet = ai;
        return (
            <div>
                <Motion
                    defaultStyle={{ y: 600 }}
                    style={{ y: spring(0, { stiffness: 64, damping: 4 }) }}
                >
                    {value => (
                        <div
                            className="Bottle"
                            style={{
                                // marginTop: `${value.y}px`
                                transform: `translate3D(0,${value.y * 0.5}px,0)`
                            }}
                        >
                            <img className="BottleItself" src={bottleImg} />
                            <img
                                className="BottleFg"
                                src={imgSet.layer3}
                                style={{
                                    // zIndex: -1,
                                    animation: 'rotation 4s linear infinite',
                                    width: '75vw',
                                    marginLeft: '14vw',
                                    marginTop: '28vw',
                                    transform: `translateY(${value.y * 0.8}px)`
                                }}
                            />

                            <img
                                className="BottleFg"
                                src={imgSet.layer5}
                                style={{
                                    // zIndex: 2,
                                    width: '60vw',
                                    marginLeft: '17vw',
                                    marginTop: '16vw',
                                    transform: `translate3D(${Math.sin(
                                        value.y * 2
                                    )}px,${value.y * 0.1}px,0)`
                                }}
                            />
                        </div>
                    )}
                </Motion>
                {this.duration >= 2.5 ? (
                    <Motion
                        defaultStyle={{ y: 600, scale: 0 }}
                        style={{
                            y: spring(0, { stiffness: 96, damping: 4 }),
                            scale: spring(1, { stiffness: 96, damping: 24 })
                        }}
                    >
                        {value => (
                            <div
                                className="Bottle"
                                style={
                                    {
                                        // marginTop: `${value.y}px`
                                    }
                                }
                            >
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer1}
                                    style={{
                                        // animation: 'scale 0.5s ease-in-out 1',
                                        width: '46vw',
                                        marginLeft: '25vw',
                                        marginTop: '43vw',
                                        zIndex: 2,
                                        transform: `rotate(${value.scale *
                                            360}deg) scale(${value.scale})`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer2}
                                    style={{
                                        zIndex: 1,
                                        width: '20vw',
                                        marginLeft: '57vw',
                                        marginTop: '45vw',
                                        transform: `rotate(${value.scale *
                                            360}deg) scale(${value.scale})`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer4}
                                    style={{
                                        zIndex: 5,
                                        width: '18vw',
                                        marginLeft: '38vw',
                                        marginTop: '50vw',
                                        transform: `rotate(${value.scale *
                                            360}deg) scale(${value.scale})`
                                    }}
                                />
                            </div>
                        )}
                    </Motion>
                ) : (
                    <div />
                )}
                <BottleInfo text={this.text} />
            </div>
        );
    }
}

export default Bottle;
export { BottleTable, BottleTest };
