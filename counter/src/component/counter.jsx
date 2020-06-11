import React from "react";
const Counter = ({
  memberId,
  memberName,
  penalty,
  onPenaltyIncrement,
  onPenaltyDecrement,
}) => {
  return (
    <div className="p-2">
      <button
        onClick={() => {
          onPenaltyDecrement(memberId);
        }}
        className="btn btn-danger btn-sm m-2"
      >
        -
      </button>
      <span>{memberName}</span>
      <button
        onClick={() => {
          onPenaltyIncrement(memberId);
        }}
        className="btn btn-primary btn-sm m-2"
      >
        +
      </button>
      <span>{penalty}</span>
      <button className="btn btn-info btn-sm m-2">Delete</button>
    </div>
  );
};

export default Counter;
