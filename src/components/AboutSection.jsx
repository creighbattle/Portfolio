import React, { Component } from 'react';

//images
import Profile from '../assets/creighbattle-clipped.png'

class AboutSection extends Component {
    render() {
        return (
            <div>
                <div className="about" id="about">
                    <div className="container about-test">
                        <div className="profile-img" data-aos="fade-right" data-aos-delay="600" data-aos-duration="4000">
                            <img src={Profile} alt=""/>
                        </div>
                        <div className="about-details" data-aos="fade-left" data-aos-delay="600" data-aos-duration="4000">
                            <div className="about-heading">
                                <h1>About</h1>
                                <h6>Myself</h6>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut atque illum,
                                commodi dolorem aperiam. Sit quae ducimus beatae amet, minus incidunt odit asperiores, sint,
                                tempora dignissimos libero consequatur sunt commodi dolorem aperiam. Sit quae ducimus beatae amet.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <div className="social-media">
                                <ul className="nav-list">
                                    <li>
                                        <a href="#" className="icon-link">
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-link">
                                            <i className="fab fa-twitter-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="icon-link">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSection;