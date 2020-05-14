import React, {Component} from "react";
import ShortenTextField from "./ShortenTextField";
import ShortenButton from "./ShortenButton";

class InputAggregator extends Component {

    constructor(props) {
        super(props);
        this.textFieldValueChanged = this.textFieldValueChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    textFieldValueChanged(text) {
        this.setState({"url": text});
        console.log(this.state);
    }

    buttonClicked() {
        console.log("ButtonClicked");
    }

    render() {
        return (
            <div>
                <div className="textFieldContainer">
                    <ShortenTextField valueChanged={this.textFieldValueChanged} />
                </div>
                <div className="buttonContainer">
                    <ShortenButton buttonClicked={this.buttonClicked} />
                </div>
            </div>
        );
    }
}

export default InputAggregator;