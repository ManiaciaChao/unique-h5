import React, { Component } from 'react';
import { Motion, spring, presets, TransitionMotion } from 'react-motion';
import './Bottle.css';
import { green } from 'ansi-colors';
import bottleImg from './ui/bottle@2x.png';
import web from './web/index';
import ai from './ai/index';

function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

class BottleTable extends Component {
    render() {
        return (
            <div className="BottleTable">
                {/* <BottleWeb /> */}
                <BottleWeb />
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
                                src={web.layer3}
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
                                src={web.layer5}
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
                {this.duration >= 1.5 ? (
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
                                    src={web.layer1}
                                    style={{
                                        zIndex: 2,
                                        transform: `translate3D(0,${value.y *
                                            0.3}px,0)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={web.layer2}
                                    style={{
                                        // zIndex: -1,
                                        width: '20vw',
                                        paddingLeft: '6vw',
                                        paddingTop: '26vw',
                                        transform: `translate3D(0,${value.y *
                                            0.3}px,0)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={web.layer4}
                                    style={{
                                        // zIndex: 2,
                                        width: '65vw',
                                        marginLeft: '20vw',
                                        marginTop: '41vw',
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
            </div>
        );
    }
}

class BottleLab extends Bottle {
    constructor(props) {
        super(props);
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
                                src={web.layer3}
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
                                src={web.layer5}
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
                {this.duration >= 1.5 ? (
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
                                    src={web.layer1}
                                    style={{
                                        zIndex: 2,
                                        transform: `translate3D(0,${value.y *
                                            0.3}px,0)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={web.layer2}
                                    style={{
                                        // zIndex: -1,
                                        width: '20vw',
                                        paddingLeft: '6vw',
                                        paddingTop: '26vw',
                                        transform: `translate3D(0,${value.y *
                                            0.3}px,0)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={web.layer4}
                                    style={{
                                        // zIndex: 2,
                                        width: '65vw',
                                        marginLeft: '20vw',
                                        marginTop: '41vw',
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
            </div>
        );
    }
}

class BottleAI extends Bottle {
    constructor(props) {
        super(props);
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
                {this.duration >= 1.5 ? (
                    <Motion
                        defaultStyle={{ scale: 0 }}
                        style={{
                            // y: spring(0, { stiffness: 16, damping: 1 }),
                            scale: spring(1, { stiffness: 24, damping: 4 })
                        }}
                    >
                        {value => (
                            <div
                                className="Bottle"
                                style={{
                                    // marginTop: `${value.y}px`
                                    transform: `scale(${value.scale})`
                                }}
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
                                            360}deg)`
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer2}
                                    style={{
                                        zIndex: 1,
                                        width: '20vw',
                                        marginLeft: '57vw',
                                        marginTop: '45vw'
                                    }}
                                />
                                <img
                                    className="BottleFg"
                                    src={imgSet.layer4}
                                    style={{
                                        zIndex: 5,
                                        width: '18vw',
                                        marginLeft: '38vw',
                                        marginTop: '50vw'
                                    }}
                                />
                            </div>
                        )}
                    </Motion>
                ) : (
                    <div />
                )}
            </div>
        );
    }
}

export default Bottle;
export { BottleTable };
