import React, {Component} from 'react'
import footer_image from "./static/footer_image.png";

class Footer extends Component {

    render() {
        return (
            <a href="https://www.github.com/mountain-viewer">
                <img className="footerImage" lt="mountain-viewer" src={footer_image}/>
            </a>
        )
    }
}

export default Footer;