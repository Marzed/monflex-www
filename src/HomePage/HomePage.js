import {Component} from "react";

class HomePage extends Component {
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
                Home Page
            </div>
        );
    }
}

export default HomePage