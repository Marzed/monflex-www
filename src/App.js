import './App.css';
import {Button, Message} from "semantic-ui-react";
import {
    Alert,
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
        this.state ={
            login:"",
            pass:"",
            status:"",
            color:""
        }

        this.changeLogin = this.changeLogin.bind(this)
        this.changePass = this.changePass.bind(this)
        this.btnOne = this.btnOne.bind(this)

    }

    changeLogin(e) {
        this.setState({status:"",color:"",login:e.target.value})
    }

    changePass(e) {
        this.setState({status:"",color:"",pass:e.target.value})
    }

    btnOne() {
        //fetch
        let authData = {
            email:this.state.login,
            password:this.state.pass,
        }

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(authData)
        };

        fetch(`https://kimmy.uno/web/auth`, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log("status:",data.status)

                switch (data.status) {
                    case "success":
                        //записываем токен в local
                        console.log("input:",data)
                        console.log("input #2:",data.data.access)
                        localStorage.setItem("token",data.data.access)
                        this.setState({status:"Успех", color:"success"})
                        break
                    case "accNotFound":
                        //записываем токен в local
                        this.setState({status:"Аккаунт не существует", color:"warning"})
                        break
                    case "error":
                        //подсветим поле неправильно или просто выведем что ошибка
                        this.setState({status:"Ошибка", color:"danger"})
                        break
                    default:
                        break
                }
                // this.setState({version: data.version})
            })
            .catch(function (err) {
                return err;
            })
            .then((err) => {
                console.log("err:",err)
            });
    }

    render() {
        return(
            <div className="App App-header">
                <Card style={{ maxWidth: "300px" }}>
                    <CardHeader>Авторизация</CardHeader>

                    <CardBody>
                        <br/>
                        <br/>

                        {this.state.status ? (<Alert theme={this.state.color}>{this.state.status}</Alert>):(<></>)}


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
                            <FormInput placeholder="Total Amount" onChange={this.changePass}/>
                        </InputGroup>


                        <Button onClick={this.btnOne}>Войти</Button>
                    </CardBody>
                    <CardFooter style={{fontSize:"14px"}}>Не аккаунта? Создать</CardFooter>
                </Card>
            </div>
        )
    }

}

export default App;
