import {Component} from "react";

class SettingsPage extends Component {
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
                SettingsPage
            </div>
        );
    }
}

export default SettingsPage