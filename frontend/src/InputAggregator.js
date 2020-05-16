import React, {Component} from "react";
import axios from "axios";

import ShortenTextField from "./ShortenTextField";
import ShortenButton from "./ShortenButton";

class InputAggregator extends Component {

    constructor(props) {
        super(props);
        this.textFieldValueChanged = this.textFieldValueChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    textFieldValueChanged(text) {
        this.setState((this.state, {url: text}));
    }

    validateURL(url) {
        if (!url) {
            return false;
        }

        return url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    }

    buttonClicked() {
        const url = this.state ? this.state.url : "";

        if (!this.validateURL(url)) {
            this.setState((this.state, {
                helperText: "Please enter a valid URL.",
                hasError: true
            }));
        } else {
            this.setState((this.state, {
                helperText: "",
                hasError: false
            }));

            const config = {
                url: url
            };

            axios.post('api/shorten', config)
                .then(response => {
                    this.props.onShorten(response);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        return (
            <div>
                <div className="textFieldContainer">
                    <ShortenTextField
                        valueChanged={this.textFieldValueChanged}
                        hasError={ this.state && this.state.hasError ? this.state.hasError : false }
                        helperText={ this.state && this.state.helperText ? this.state.helperText : "" }/>
                </div>
                <div className="buttonContainer">
                    <ShortenButton buttonClicked={this.buttonClicked} />
                </div>
            </div>
        );
    }
}

export default InputAggregator;