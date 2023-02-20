const UpdateIncDec = ({
  incrementValue,
  decrementValue,
  handleIncrementChange,
  handleDecrementChange,
}) => {
  console.log(incrementValue, decrementValue);
  return (
    <div>
      <label>Increment</label>
      <input
        type="text"
        value={incrementValue > 0 ? incrementValue : ""}
        onChange={handleIncrementChange}
      />
      <label>Decrement</label>
      <input
        type="text"
        value={decrementValue > 0 ? decrementValue : ""}
        onChange={handleDecrementChange}
      />
    </div>
  );
};

export default UpdateIncDec;
