import {Button, Col, Row} from "shards-react";
import {NavLink} from "react-router-dom";

function LandingPage(){
    return(
        <div style={{textAlign:"center"}}>
            <Row>
                <Col>
                    <NavLink to={"/login"}><Button>Go to login</Button></NavLink>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    Its LandingPage
                </Col>
            </Row>
        </div>
    )
}

export default LandingPage