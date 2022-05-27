import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Update from "./components/update/Update";
import "./app.css";

// While action types allow you tell your reducer what action it should take,
// the payload is the data that your reducer will use to update the state.

//

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Leftbar />
        <Update />
        <Rightbar />
      </div>
    </>
  );
};

export default App;

//
//const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };

//     case "decrement":
//       return { ...state, count: state.count - 1 };

//     case "newUserInput":
//       return { userInput: action.payload };
//     case "tgColor":
//       return { ...state, color: !state.color };

//     default:
//       return state;
//   }
// };
// ............. //
// const [state, dispatch] = useReducer(reducer, {
//   count: 0,
//   userInput: "",
//   color: false,
// });
// const [count, setCount] = useState(0);
// const [userInput, setUserInput] = useState("");

// const [color, setColor] = useState(false);

//............//
{
  /* <div className='App' style={{ color: state.color ? "blue" : "red" }}>
        <input
          type='text'
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: "newUserInput", payload: e.target.value })
          }
        />
        <br />
        <br />
        <p>{state.count}</p>
        <section>
          <button onClick={() => dispatch({ type: "decrement" })}>-</button>
          <button onClick={() => dispatch({ type: "increment" })}>+</button>
          <button onClick={() => dispatch({ type: "tgColor" })}>Color</button>
        </section>
        '<p>{state.userInput}</p>
      </div> */
}
