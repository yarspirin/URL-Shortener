import React, {Component} from "react";

import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const styles = {
    input: {
        color: "white"
    }
};

const theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});

class ShortenTextField extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.props.valueChanged(event.target.value);
        this.setState({ text: event.target.value });
    }

    render() {
        const { classes } = this.props;

        const textFieldStyle = {
            width: "600px"
        };

        return (
            <ThemeProvider theme={theme}>
                <TextField
                    style={textFieldStyle}
                    id="textField"
                    name="textField"
                    label="URL"
                    margin="dense"
                    variant="outlined"
                    type="url"
                    error={ this.props.hasError}
                    onChange={(e) => { this.onChange(e) }}
                    helperText={this.props.helperText}
                    InputProps={{
                        className: classes.input
                    }}
                />
            </ThemeProvider>
        );
    }
}

export default withStyles(styles)(ShortenTextField);