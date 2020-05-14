import React, {Component} from 'react'

import title_image from "./static/title_image.png"

class Title extends Component {

    render() {
        return (
            <a href="http://yarurl.herokuapp.com/">
                <img className="titleImage" src={title_image} alt="URL SHORTENER"/>
            </a>
        );
    };
}

export default Title;