"use client";

import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)} className="bg-teal-300">
        Increment
      </button>
      <h3>{counter}</h3>
    </div>
  );
};

export default Counter;
