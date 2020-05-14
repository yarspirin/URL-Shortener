import React, {Component} from "react";

import Button from "@material-ui/core/Button";

class ShortenButton extends Component {

    render() {
        const buttonStyle = {
            width: "200px",
            height: "50px"
        };

        return (
            <Button style={buttonStyle} variant="contained" color="primary" size="large">
                Shorten
            </Button>
        );
    }
}

export default ShortenButton;