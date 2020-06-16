import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>PLUS</button>
      <button onClick={() => dispatch(decrement())}>MINUS</button>
      {logged ? <h2>Hello!</h2> : <h2>Login</h2>}
    </div>
  );
}

export default App;
