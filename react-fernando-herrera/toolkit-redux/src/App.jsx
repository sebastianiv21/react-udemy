import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      count is {counter}
      <div className='card'>
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  );
}

export default App;
