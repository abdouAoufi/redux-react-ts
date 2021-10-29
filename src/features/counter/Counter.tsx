import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setName } from "./counter-slice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <button onClick={() => dispatch(increment(4))}>Increment</button>
        <p>{count}</p>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(setName("Hello world"));
          }}
        >
          set name
        </button>
      </div>
    </div>
  );
}
