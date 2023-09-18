import './App.css'
import { useAppDispatch, useAppSelector } from './app/Hooks';
import { increment, decrement, reset, addAmount } from './features/counter/CounterSlice';

function App() {

  const value = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();

  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function handleAddCustom() {
    let customNumber = Number(prompt("Enter amount to add:"))
    dispatch(addAmount(customNumber))
  }

  return (
    <div>
      <h1>Redux Counter Demo</h1>
      <p>Current value: {value}</p>
      <button 
        style={{margin: "5px"}}
        onClick={handleIncrement}
      >
        +
      </button>
      <button 
        style={{margin: "5px"}}
        onClick={handleDecrement}
      >
        -
      </button>
      <button 
        style={{margin: "5px"}}
        onClick={handleReset}
      >
        Reset
      </button>
      <button
        style={{margin: "5px"}}
        onClick={handleAddCustom}
      >
        Add X
      </button>
    </div>
  )
}

export default App
