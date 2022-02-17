import './App.css';
import {UseState} from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import UseRef from "./hooks/useRef";
import UseMemo from "./hooks/useMemo";
import UseCallback from "./hooks/useCallback";
import UseContext from "./hooks/useContext";
import UseContextProvider from "./hooks/useContext";
import UseReducer from "./hooks/useReducer";

function App() {
  return (
    <div className="">
     Hooks
      <br/>
      <br/>
      <UseReducer/>
    </div>
  );
}

export default App;
