import React, {Component} from "react";
import axios from "axios";

class PongComponent extends Component {

    constructor() {
        super();
        this.state = {
            pong: "pending"
        }
    }

    componentDidMount() {
        axios.get('/api/pong')
            .then(response => {
                this.setState(() => {
                    return { pong: response.data.message }
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <h1>Ping {this.state.pong}!</h1>
    }
}

export default PongComponent;