import React, {Component} from "react";

import Button from "@material-ui/core/Button";

class ShortenButton extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.props.buttonClicked()
    }

    render() {
        const buttonStyle = {
            width: "200px",
            height: "50px"
        };

        return (
            <Button
                style={buttonStyle}
                variant="contained"
                color="primary"
                size="large"
                onClick={this.onClick}>
                Shorten
            </Button>
        );
    }
}

export default ShortenButton;