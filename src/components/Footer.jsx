import React, { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="copyright">
                    <ScrollIntoView selector="#home">
                        <div className="up" id="up">
                            <i className="fas fa-chevron-up"></i>
                        </div>
                    </ScrollIntoView>
                    <p>&copy; 2019 Creigh Battle</p>
                </footer>
            </div>
        );
    }
}

export default Footer;