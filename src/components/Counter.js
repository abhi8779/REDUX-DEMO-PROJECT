// import { Component } from "react";
// import { connect } from "react-redux";

import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counterSlice";
const Counter = () => {
  const dispatchfn = useDispatch();
  const counter = useSelector((state) => state);

  const incrementCounterHandler = () => {
    dispatchfn(counterActions.increment()); // {Some Unique Identifier, payload:10 }
  };
  const incrementn5Handler = () => {
    dispatchfn(counterActions.inc5(10));
  };
  const decrementCounterHandler = () => {
    dispatchfn(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatchfn(counterActions.toggleCouter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter.counter.counter}</div>
      {counter.counter.showCounter && (
        <div>
          <button onClick={decrementCounterHandler}>Decrement</button>
          <button onClick={incrementCounterHandler}>Increment</button>
          <button onClick={incrementn5Handler}>Increment by 5</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementCounter = () => {
//     this.props.increment();
//   };
//   decrementCounter = () => {
//     this.props.decrement();
//   };
//   toggleCounterHandler = () => {
//     console.log(this.props.counter);
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.decrementCounter}>Decrement</button>
//           <button onClick={this.incrementCounter}>Increment</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
