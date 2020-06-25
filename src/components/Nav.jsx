import React, { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
        }
    }

    toggleMenu() {

        let toggle = document.getElementById("menu-toggler");
        let topNav = document.getElementById("top-nav");
        let barStart = document.getElementById("bar-start");
        let barEnd = document.getElementById("bar-end");

        if (toggle.className === "menu-toggler") {
            toggle.className = "menu-toggler menu-toggler-open";
        } else {
            toggle.className = "menu-toggler";
        }

        if (topNav.className === "top-nav") {
            topNav.className = "top-nav top-nav-open";
        } else {
            topNav.className = "top-nav";
        }

        if (barStart.className === "bar half start") {
            barStart.className = "bar half start bar-start";
        } else {
            barStart.className = "bar half start";
        }

        if (barEnd.className === "bar half end") {
            barEnd.className = "bar half end bar-end";
        } else {
            barEnd.className = "bar half end";
        }

    }

    render() {
        return (
            <div>

                <div className="menu-toggler" id="menu-toggler" onClick={() => this.toggleMenu()}>
                    <div className="bar half start" id="bar-start"></div>
                    <div className="bar"></div>
                    <div className="bar half end" id="bar-end"></div>
                </div>

                <nav className="top-nav" id="top-nav">
                    <ul className="nav-list">
                        <li>
                            <ScrollIntoView selector="#home">
                                <p className="nav-link" onClick={() => this.toggleMenu()}>Home</p>
                            </ScrollIntoView>
                        </li>
                        <li>
                            <ScrollIntoView selector="#about">
                                <p className="nav-link" onClick={() => this.toggleMenu()}>About</p>
                            </ScrollIntoView>
                        </li>
                        <li>
                            <ScrollIntoView selector="#services">
                                <p className="nav-link" onClick={() => this.toggleMenu()}>Services</p>
                            </ScrollIntoView>
                        </li>
                        <li>
                            <ScrollIntoView selector="#portfolio">
                                <p className="nav-link" onClick={() => this.toggleMenu()}>Portfolio</p>
                            </ScrollIntoView>
                        </li>
                        <li>
                            <ScrollIntoView selector="#contact">
                                <p className="nav-link" onClick={() => this.toggleMenu()}>Contact</p>
                            </ScrollIntoView>
                        </li>
                    </ul>
                </nav>


            </div>
        );
    }
}

export default Nav;