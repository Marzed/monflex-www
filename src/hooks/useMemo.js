import {useEffect, useMemo, useState} from "react";

// function calc(counter){
// 	console.log("calc")
// 	let i = 0
// 	while (i < 1000000000)  i++
// 	return counter * 3
// }

// export default function UseMemo(){
// 	const [counter,setCounter] = useState(0)
// 	const [value,setValue] = useState(0)
//
// 	const hard = useMemo(()=>{
// 		return calc(counter)
// 	},[counter])
//
// 	useEffect(()=>{
// 		console.log("value changed")
// 	},[value])
//
// 	return (
// 		<div>
// 			<h2>UseMemo</h2>
// 			<br/>
// 			<h3>Counter {counter} {hard} value : {value}</h3>
// 			<hr/>
// 			<button onClick={()=> setCounter(prevState => prevState+1)}>Add</button>
// 			<button onClick={()=> setValue(prevState => prevState+1)}>Add value</button>
// 		</div>
// 	)
// }

function mult(counter){
	let i=0
	while(i<1000000000) i++
	return counter*3
}

export default function UseMemo(){

	const [counter, setCounter] = useState(0)
	const [value, setValue] = useState(0)

	const hard = useMemo(()=>{
		return mult(counter)
	}, [counter])


	return (
		<div>
			<h3>UseMemo</h3>
			<br/>
			<h3>Counter: {counter} | Hard:{hard} |  Value: {value}</h3>
			<hr/>
			<button onClick={()=>setCounter(prevState => prevState+1)}>Add Counter</button>
			<button onClick={()=>setValue(prevState => prevState+2)}>Add Value</button>
		</div>
	)
}