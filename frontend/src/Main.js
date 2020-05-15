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
                <div className="resultContainer">
                    <div className="shortURLContainer">
                        <div>Short URL:</div>
                        <a className="shortLink" href={this.state.shortUrl}>{this.state.shortUrl}</a>
                    </div>
                    <div className="originalURLContainer">
                        <div>Original URL:</div>
                        <a className="longLink" href={this.state.shortUrl}>{this.state.shortUrl}</a>
                    </div>
                    <footer className="footerContainer">
                        <Footer/>
                    </footer>
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