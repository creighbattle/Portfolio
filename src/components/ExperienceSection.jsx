import React, { Component } from 'react';

class ExperienceSection extends Component {
    render() {
        return (
            <div>
                <div className="experience" id="experience">
                    <div className="section-heading">
                        <h1>Work Experience</h1>
                        <h6>Past and current jobs</h6>
                    </div>
                    <div className="timeline">
                        <ul>
                            <li className="date" data-date="2011 - Present">
                                <h1>Google</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="date" data-date="2008 - 2011">
                                <h1>Facebook</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                            <li className="date" data-date="2002 - 2007">
                                <h1>Microsoft</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExperienceSection;