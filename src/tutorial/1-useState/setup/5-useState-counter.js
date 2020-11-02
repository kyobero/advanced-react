import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2> regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() =>setValue(value -1)}>decrease</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={() => setValue(value + 1)}> increase</button>
      </section>
      </>
      );
};

export default UseStateCounter;
