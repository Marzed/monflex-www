import {useCallback, useEffect, useState} from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Card,
	CardBody,
	Col,
	Container,
	ListGroup,
	ListGroupItem,
	Row
} from "shards-react";

// function ItemsList({genArrayFunction}){
// 	const [items,setItems] = useState([])
//
// 	useEffect(()=>{
// 		console.log("func changed")
// 		const newItems = genArrayFunction()
// 		setItems(newItems)
// 	},[genArrayFunction])
//
// 	return (
// 		<ListGroup>
// 			{items.map((a) =>  <ListGroupItem key={a}>{a}</ListGroupItem>)}
// 		</ListGroup>
// 	)
// }

// export default function UseCallback(){
// 	const [items,setItems] = useState(0)
// 	const [value,setValue] = useState(0)
//
// 	//так сработает создание новой функции на любом действии со стейтов, даже других функций и стейтов
// 	// const GenArrayFunction = () => {
// 	// 	return new Array(items).fill("").map((v,i) => `gen line ${i}`)
// 	// }
//
// 	const GenArrayFunction = useCallback(() => {
// 		if (items < 0) return []
// 		return new Array(items).fill("").map((v,i) => `gen line ${i}`)
// 	},[items])
//
// 	return (
// 		<div>
//
// 			<Container>
// 				<Row>
// 					<Col>
// 						<Breadcrumb>
// 							<BreadcrumbItem>
// 								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
// 								<a href="#">Hooks</a>
// 							</BreadcrumbItem>
// 							<BreadcrumbItem active>useCallback</BreadcrumbItem>
// 						</Breadcrumb>
// 					</Col>
// 				</Row>
// 				<br/>
// 				<h3>Items: {items} | Value: {value}</h3>
// 				<hr/>
// 				<Row>
// 					<Col>
// 						<Button onClick={()=>setItems(prevState => prevState+1)}>Add Item</Button>{" "}
// 						<Button  onClick={()=>setItems(prevState => prevState-1)}>Sub Item</Button>{" "}
// 						<Button theme="secondary"  onClick={()=>setValue(prevState => prevState+1)}>Add Value</Button>
// 					</Col>
// 					<Col>
// 						<ItemsList genArrayFunction={GenArrayFunction}/>
// 					</Col>
// 				</Row>
// 			</Container>
// 		</div>
// 	)
// }

export default function UseCallback(){
	const [items,setItems] = useState(0)
	const [value,setValue] = useState(0)


	const GenerateArrayFunction = useCallback(() => {
		console.log("click")
		if (items < 0) {return []}
		return new Array(items).fill("").map((a,index) => { return `generate line ${index}`})
	},[items])

	const ChangeValue = useCallback(()=>{
		console.log("value has changed")
	},[value])


	return (
		<Container>
			 				<Row>
			 					<Col>
			 						<Breadcrumb>
			 							<BreadcrumbItem>
			 								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			 								<a href="#">Hooks</a>
			 							</BreadcrumbItem>
			 							<BreadcrumbItem active>useCallback</BreadcrumbItem>
			 						</Breadcrumb>
			 					</Col>
			 				</Row>
			 				<br/>
			 				<h3>Items: {items}  | Value: {value} </h3>
			 				<hr/>
			 				<Row>
			 					<Col>
			 						<Button onClick={()=>setItems(prevState => prevState+1)}>Add Item</Button>{" "}
			 						<Button onClick={()=>setItems(prevState => prevState-1)}>Sub Item</Button>{" "}
			 						<Button theme="secondary" onClick={()=>setValue(prevState => prevState+1)}>Add Value</Button>
			 					</Col>
			 					<Col>
								  <Items genFunc={GenerateArrayFunction}/>
							  </Col>
			 				</Row>
		</Container>
	)
}

function Items({genFunc}){
	const [items,setItems] = useState([])

	useEffect(()=>{
		const newItems = genFunc()
		setItems(newItems)
	},[genFunc])

	return (
		<div>
			<ListGroup>
				{items.map(a => {
					return <ListGroupItem key={a}>{a}</ListGroupItem>
				})
				}
			</ListGroup>
		</div>
	)
}
