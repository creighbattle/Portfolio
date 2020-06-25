import React, { Component } from 'react';

class ContactMeSection extends Component {
    render() {
        return (
            <div>
                <div className="contact" id="contact">
                    <div className="container" data-aos="fade-right" data-aos-delay="300" data-aos-duration="4000">
                        <div className="section-heading">
                            <h1>Contact</h1>
                            <h6>Let's work together</h6>
                        </div>
                        <form action="">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name..." required/>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email..." required/>
                            <label htmlFor="service">Services:</label>
                            <select name="service" id="service">
                                <option value="">Web Design</option>
                                <option value="">Web Development</option>
                                <option value="">Web Design/Development</option>
                            </select>
                            <label htmlFor="subject">Subject:</label>
                            <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactMeSection;