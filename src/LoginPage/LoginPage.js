import {Component} from "react";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unlock: false,
            auth: false,
        }
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                LoginPage
            </div>
        );
    }
}

export default LoginPage