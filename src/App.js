import './App.css';
import {Button} from "semantic-ui-react";
import {
    Badge,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImg,
    CardTitle,
    FormInput,
    InputGroup,
    InputGroupAddon, InputGroupText
} from "shards-react";
import {Component} from "react";



class App extends Component {
  constructor(props) {
      super(props);
      this.state={
          login:"",
          password:"",
      }
      this.changeLogin=this.changeLogin.bind(this);
      this.changePassword=this.changePassword.bind(this);
  }

  changeLogin(e){
      this.setState({login:e.target.value})
  }

  changePassword(e){
      this.setState({password:e.target.value})
  }

    render(){
    return (
    <div className="App App-header">
        <Card style={{ maxWidth: "300px" }}>
            <CardHeader>Авторизация</CardHeader>

            <CardBody>
                <br/>
                <br/>

                <InputGroup className="mb-2">
                    <InputGroupAddon type="prepend">
                        <InputGroupText>login</InputGroupText>
                    </InputGroupAddon>
                    <FormInput placeholder="Total Amount" onChange={this.changeLogin}/>
                </InputGroup>

                <InputGroup className="mb-2">
                    <InputGroupAddon type="prepend">
                        <InputGroupText>pass</InputGroupText>
                    </InputGroupAddon>
                    <FormInput placeholder="Total Amount" onChange={this.changePassword}/>
                </InputGroup>


                <Button>Войти</Button>
            </CardBody>
            <CardFooter style={{fontSize:"14px"}}>Не аккаунта? Создать</CardFooter>
        </Card>
    </div>
  );
  }
}

export default App;
