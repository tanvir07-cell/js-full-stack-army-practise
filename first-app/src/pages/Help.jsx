import { useState } from "react";
import Display from "../components/display-count/Display";
import Buttons from "../components/inc-dec-buttons/Buttons";
import Layout from "../components/layout/Layout";
import UpdateIncDec from "../components/user-inc-dec/UpdateIncDec";

function Help() {
  const [count, setCount] = useState(0);

  // user input diye state change korabe(count change hobe):
  const [incrementValue, setIncrementValue] = useState(10);
  const [decrementValue, setDecrementValue] = useState(5);

  const handleIncrementChange = (e) => {
    setIncrementValue(parseInt(e.target.value));
  };

  const handleDecrementChange = (e) => {
    setDecrementValue(parseInt(e.target.value));
  };

  return (
    <Layout>
      <h1>This is the Help</h1>
      <Display count={count}></Display>
      <UpdateIncDec
        incrementValue={incrementValue}
        decrementValue={decrementValue}
        handleIncrementChange={handleIncrementChange}
        handleDecrementChange={handleDecrementChange}
      ></UpdateIncDec>
      <Buttons
        text="Increment"
        onClick={() => setCount(count + incrementValue)}
      ></Buttons>
      <Buttons
        text="Decrement"
        onClick={() =>
          count > 0 ? setCount(count - decrementValue) : setCount(count)
        }
      ></Buttons>
    </Layout>
  );
}

export default Help;

/**
 * When component is rerendering:
 *  state changes, parent (or children) re-renders, context changes, and hooks changes.
 */
