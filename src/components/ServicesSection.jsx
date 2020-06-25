import React, { Component } from 'react';

class ServicesSection extends Component {
    render() {
        return (
            <div>
                <div className="services" id="services">
                    <div className="container" data-aos="fade-up" data-aos-delay="300" data-aos-duration="4000">
                        <div className="section-heading">
                            <h1>Services</h1>
                            <h6>What I can do for you</h6>
                        </div>
                        <div className="my-skills">
                            <div className="skill">
                                <div className="icon-container">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <h1>Web Design</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="skill">
                                <div className="icon-container">
                                    <i className="fas fa-code"></i>
                                </div>
                                <h1>Web Development</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                            <div className="skill">
                                <div className="icon-container">
                                    <i className="fas fa-chart-bar"></i>
                                </div>
                                <h1>Product Strategy</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesSection;