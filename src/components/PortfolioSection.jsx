import React, { Component } from 'react';

//images
import PortItem1 from '../assets/bakery.png'
import PortItem2 from '../assets/portitem2.jpeg'
import PortItem3 from '../assets/portitem3.jpeg'

class PortfolioSection extends Component {

    openSite() {
        window.open("https://creighbattle.github.io/BakeryDemo/", '_blank');
    }

    render() {
        return (
            <div>
                <div className="portfolio" id="portfolio">
                    <div className="container">

                        <div className="section-heading">
                            <h1>Portfolio</h1>
                            <h6>View some of my recent work</h6>
                        </div>

                        <div className="portfolio-item" data-aos="fade-left" data-aos-delay="300" data-aos-duration="4000">
                            <div className="portfolio-img has-margin-right">
                                <img src={PortItem1} alt="" />
                            </div>
                            <div className="portfolio-description">
                                <h6>Web Development</h6>
                                <h1>Bakery Template</h1>
                                <p>
                                    In this project I use bootstrap 4 and custom css
                                    to design a responsive bakery themed website.
                                </p>
                                <p className="cta" onClick={() => this.openSite()}>Visit Website</p>
                            </div>
                        </div>

                        <div className="portfolio-item" data-aos="fade-right" data-aos-delay="300" data-aos-duration="4000">
                            <div className="portfolio-description has-margin-right">
                                <h6>Web Design</h6>
                                <h1>Product Layout</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <p className="cta">Visit Website</p>
                            </div>
                            <div className="portfolio-img">
                                <img src={PortItem2} alt="" />
                            </div>
                        </div>

                        <div className="portfolio-item" data-aos="fade-left" data-aos-delay="300" data-aos-duration="4000">
                            <div className="portfolio-img has-margin-right">
                                <img src={PortItem3} alt="" />
                            </div>
                            <div className="portfolio-description">
                                <h6>Web Design</h6>
                                <h1>Product Sketch</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <p className="cta">Visit Website</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioSection;