import {Alert, Badge, Button, Col, Container, Row} from "shards-react";
import React, {useContext, useReducer, useState} from "react";

const ContextAlert = React.createContext()


const reducer = (state,action) => {
	switch (action.type){
		case "SHOW": return {...state,show: !state.show}
		case "LOG": return {...state,show: true}
		default: return state
	}
}


export default function UseReducer() {
	const [state,dispatch] = useReducer(reducer,{
		show:false,
	})

	const show = () => dispatch({type:"SHOW"})
	const log = () => {
		dispatch({type:"LOG"})
		console.log("log click")
	}

	return (
		<ContextAlert.Provider value={{state,show,log}}>
			<Container>
				<Row>
					<Col>
						<h3>UseReducer</h3>
						<br/>
						<Button onClick={()=>show()}>Show Message</Button>{" "}
						<br/>
					</Col>
				</Row>
				<br/>
				<UseReducerChildren/>
			</Container>
		</ContextAlert.Provider>
	)
}

function ReturnArray(){
	return [
		<h3>ReturnArray</h3>,
		<h3>...</h3>
	]
}

function Fragment(){
	return (
		<>
			<h3>Fragment</h3>
			<h3>Component</h3>
		</>
	)
}

function UseReducerChildren(){
	const ctx = useContext(ContextAlert)

	if (!ctx.state.show) return null

	return (
		<Container>
			<Row>
				<Col>
					<Alert theme="danger" onClick={()=>ctx.show()}>{ctx.state.show === true ? "y":"n"}</Alert>
					<Button onClick={()=>ctx.log()}>ACTION LOG</Button>
				</Col>
			</Row>
			<hr/>
			<Row>
				<Col>
					<Fragment/>
				</Col>
			</Row>
			<hr/>
			<Row>
				<Col>
					<ReturnArray/>
				</Col>
			</Row>
		</Container>
	)
}


