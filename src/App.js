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

function App() {
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
                    <FormInput placeholder="Total Amount" />
                </InputGroup>

                <InputGroup className="mb-2">
                    <InputGroupAddon type="prepend">
                        <InputGroupText>pass</InputGroupText>
                    </InputGroupAddon>
                    <FormInput placeholder="Total Amount" />
                </InputGroup>


                <Button>Войти</Button>
            </CardBody>
            <CardFooter style={{fontSize:"14px"}}>Не аккаунта? Создать</CardFooter>
        </Card>
    </div>
  );
}

export default App;
