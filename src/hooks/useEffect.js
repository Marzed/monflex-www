import {useEffect, useRef, useState} from "react";

function useTT(initialValue){
	const [i,setI] = useState(initialValue)

	function onChange(event){
		setI(event.target.value)
		console.log(event.target.value)
	}

	return {
		i, onChange
	}
}

export default function UseEffect() {
	const [type,setType] = useState("Юзер")
	const [data,setData] = useState({})
	const count = useRef() //log(count.current)

	const ii = useTT("loll")


	// useEffect(()=>{
	// 	console.log("render")
	// })

	useEffect(()=>{
		console.log("type change")
		fetch(`https://jsonplaceholder.typicode.com/${type}`)
			.then(response => response.json())
			.then(json => setData(json))
	},[type])

	return (
		<div>
			<h3>UseEffect</h3>
		<br/>
		<h5>Значение поля: {type}</h5>

			<button onClick={()=>{setType("users")}}>Пользователи</button>
			<button onClick={()=>{setType("todos")}}>TODO</button>
			<button onClick={()=>{setType("comments")}}>Комменты</button>
			<br/><br/>
			<input onChange={ii.onChange}/>

			<pre>{JSON.stringify(data,null,2)}</pre>

		</div>
	)
}