'use client';

import { useState } from 'react';

export default function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
