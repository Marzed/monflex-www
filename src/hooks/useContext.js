import {Alert, Badge, Button, Col, Container, Row} from "shards-react";
import React, {useContext, useState} from "react";

const ContextAlert = React.createContext()

// export default function UseContext() {
// 	const [alert,setAlert] = useState(false)
//
// 	const changeAlert = () => {
// 		return setAlert(prevState => !prevState)
// 	}
//
// 	return (
// 		<ContextAlert.Provider value={{alert,changeAlert}}>
// 		<Container>
// 			<Row>
// 				<Col>
// 					<h3>UseCallback</h3>
// 					<br/>
// 					<Button onClick={()=>changeAlert()}>Show Message</Button>
// 					<br/>
// 				</Col>
// 			</Row>
// 			<br/>
// 			<UseContextChildren/>
// 		</Container>
// 		</ContextAlert.Provider>
// 	)
// }
//
// function UseContextChildren(){
// 	const ctx = useContext(ContextAlert)
//
// 	if (!ctx.alert) return <></>
// 	return (
// 		<Container>
// 			<Row>
// 				<Col>
// 					<Alert>Alert text {ctx.alert === true ? "y":"n"}</Alert>
// 				</Col>
// 			</Row>
// 		</Container>
// 	)
// }


//создаем контекст через const ContextAlert = React.createContext()
//создаем родителя <ContextAlert.Provider value={{value,change}}> все компоненты что тут получат пропсы, они дети этого родителя</ContextAlert.Provider>
//создаем ребёнка const ctx = useContext(ContextAlert)
//дальше в ребёнке обращаемся к объекту ctx и его поля это props value



export default function UseContextProvider() {
	const [alert,setAlert] = useState(false)
	const [value,setValue] = useState("Alert message here")
	const [badge, setBadge] = useState("primary")

	const changeAlert = () => {
		setAlert(prevState => !prevState)
	}

	const changeBadgeSuccess=()=>{
		setBadge("success")
	}

	const changeBadgeDanger=()=>{
		setBadge("danger")
	}

	return (
		<ContextAlert.Provider value={{alert,value,changeAlert, setB:{badge,changeBadgeSuccess, changeBadgeDanger}}}>
			<Container>
				<Row>
					<Col>
						<h3>UseContext</h3>
						<br/>
						<Button onClick={()=>changeAlert()}>Show Message</Button>{" "}
						<Button theme="success" onClick={()=>changeBadgeSuccess()}>Success Badge</Button>{" "}
						<Button theme="danger" onClick={()=>changeBadgeDanger()}>Danger Badge</Button>{" "}
						<br/>
					</Col>
				</Row>
				<br/>
				<UseContextChildren/>
				<UseContextChildren/>
				<UseAnotherChild/>
			</Container>
		</ContextAlert.Provider>
	)
}

function UseContextChildren(){
	const ctx = useContext(ContextAlert)

  if (!ctx.alert) return null

	return (
		<Container>
			<Row>
				<Col>
					<Alert theme="danger" onClick={()=>ctx.changeAlert()}>{ctx.value}</Alert>
				</Col>
			</Row>
		</Container>
	)
}


function UseAnotherChild(){
	 const ctx = useContext(ContextAlert);
	 // ctx.setB.changeBadgeDanger()
	  if(ctx.setB.badge ==="success"){
			return null
	  }


	return  <Badge theme={ctx.setB.badge}>text</Badge>

}


