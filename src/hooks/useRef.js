import {useEffect, useRef, useState} from "react";


// export default function UseRef(){
//   const [counterState,setCounterState] = useState(0)
//   const counterRef = useRef(0)
//
// 	const [inputText, setInputText] = useState("init")
// 	const inputRef = useRef(null)
// 	const FocusOnRef = () => inputRef.current.focus()
// 	const BlurOnRef = () => inputRef.current.blur()
//
// 	return (
// 		<div>
// 		<h3>Counter State {counterState} </h3>
// 			<h3>Counter Ref {counterRef.current}</h3>
//
// 			<hr/>
// 			<button onClick={()=>setCounterState(prevState => prevState+1)}>AddToState + 1</button>
// 			<button onClick={()=> {counterRef.current = counterRef.current+1;console.log("added to ref")}}>AddToRef + 1</button>
// 			<br/>
// 			<hr/>
// 			<h3>Text {inputText}</h3>
// 			<input
// 				ref={inputRef}
// 				type="text"
// 				value={inputText}
// 				onChange={(e)=>setInputText(e.target.value)}
//
// 			/>
// 			<button onClick={FocusOnRef}>Set Focus</button>
// 			<button onClick={BlurOnRef}>Set Blur</button>
// 		</div>
// 	)
// }


// export default function UseRef(){
// 	const [counterState, SetCounterState] = useState(0); //при изменении counter вызовется ререндер
// 	const counterRef = useRef(0) //при изменении counter не вызовется ререндер
//
// 	const [inputText,setInputText] = useState("init")
// 	const inputRef = useRef(null)
//
// 	const SetFocusOnInput = () => inputRef.current.focus()
// 	const SetBlurOnInput = () => inputRef.current.blur()
//
//  useEffect(()=>{
// 	 console.log("ref:",counterRef.current)
//  }, [counterRef.current])
//
// 	return (
// 		<div>
// 			<h2>UseRef</h2>
// 			<br/>
// 			<h3>Counter useState: {counterState}</h3>
// 			<h3>Counter useRef: {counterRef.current}</h3>
// 			<hr/>
// 			<button onClick={()=>SetCounterState(prevState => prevState+1)}>AddToState</button>
// 			<button onClick={()=>{counterRef.current +=1;console.log("counter ref changed",counterRef.current)}}>AddToRef</button>
// 		</div>
// 	)
// }

//useState
//useEffect
//useRef
//useMemo

//useCallback
//useContext
//useReducer


export default function UseRef(){
	 const [counterState, setCounterS] = useState(0)
	const counterRef = useRef(0)


	return (
		<div>
		  <h1>Counter State: {counterState}</h1>
			<h1>Counter Ref: {counterRef.current}</h1>
			<hr/>
			<button onClick={()=>setCounterS(prevState => prevState+1)}>AddToState</button>
			<button onClick={()=> {counterRef.current+=1; console.log("ref works",counterRef.current)}}>AddToRef</button>
		</div>
	)
}
