import {Link, Navigate, Route, Routes, } from "react-router-dom";
import {Component} from "react";
import {history} from "./utils/history";
import LandingPage from "./LandingPage/LandingPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import {Button, Nav, NavItem, NavLink} from "shards-react";
import SettingsPage from "./SettingsPage/SettingsPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unlock: false,
            auth: false,
            btnColor:"danger"
        }
    }

    componentDidMount() {
        if (this.state.auth === true){
            history.push("/home")
        } else {
            history.push("/")
        }
    }

    render() {
        let routes = (
            <div>
            <Routes>

                {/*NEED AUTH*/}
                {this.state.auth ? (
                    <>
                        <Route path={"/home"} element={<HomePage/>}/>
                        <Route path={"/settings"} element={<SettingsPage/>} />

                        {/*ЕСЛИ МЫ ЗАЛОГИНЕНЫ, НО ВВЕЛИ ЕРУНДУ В URL ТО ОТПРАВИТЬ ПОЛЬЗОВАТЕЛЯ ОБРАТНО В ЕГО КАБИНЕТ*/}
                        <Route path="*" element={<Navigate to={"/home"}/>}/>
                    </>)
                    :null
                }

                {/*PUBLIC*/}
                <Route path={"/"} element={<LandingPage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>
            </div>
        )

        return (
            <div>
                <Nav>
                    <NavItem>
                        <NavLink active href="#">
                            <Link to="/home">Главная</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link to="/login">Логин</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link to="/home">Личный кабинет</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link to="/settings">Настройки кабинета</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <Button
                            size="sm"
                            pill
                            theme={this.state.auth ? "success":"danger"}
                            onClick={()=>{this.setState({auth:!this.state.auth})}}
                        >
                            {this.state.auth ? "Выйти из учётной записи" : "Авторизоваться"}
                        </Button>
                    </NavItem>
                </Nav>
                <hr/>
                    <br/>
                    {routes}
            </div>
        );
    }
}

export default App