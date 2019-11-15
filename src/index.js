import React, { useState } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const inc = c => c + 1;
const dec = c => c - 1;

const Application = props => {
  const [count, setCount] = useState(3);

  const increment = () => setCount(inc);
  const decrement = () => setCount(dec);

  return (
    <main className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </main>
  );
};

render(
  <div>
    <Application step={5} />
    <Application step={15} />
  </div>,
  document.getElementById('root')
);
