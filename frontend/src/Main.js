import React, {Component} from "react";

import Title from "./Title";
import InputAggregator from "./InputAggregator";
import Footer from "./Footer";

class Main extends Component {

    constructor(props) {
        super(props);
        this.onShorten = this.onShorten.bind(this);
    }

    onShorten(response) {
        console.log("response");
        this.setState((this.state, {
            shortUrl: "http://yarurl.herokuapp.com/"
        }));
    }

    render() {
        if (this.state && this.state.shortUrl) {
            return (
                <div>
                    Short URL:
                    <a href={this.state.shortUrl}>{this.state.shortUrl}</a>
                </div>
            )
        } else {
            return (
                <div className="mainContainer">
                    <div className="titleContainer">
                        <Title/>
                    </div>
                    <div className="inputContainer">
                        <InputAggregator onShorten={this.onShorten} />
                    </div>
                    <footer className="footerContainer">
                        <Footer/>
                    </footer>
                </div>
            )
        }
    }
}

export default Main;