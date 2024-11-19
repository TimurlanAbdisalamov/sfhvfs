import { addCar, add5Cars, remove5Cars } from "./redux/reducers/car";
import { useDispatch } from "react-redux";

export default function Button() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addCar())}>Add Car</button>
      <button onClick={() => dispatch(add5Cars())}>+5 Cars</button>
      <button onClick={() => dispatch(remove5Cars())}>-5 Cars</button>
    </div>
  );
}
