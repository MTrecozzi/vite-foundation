import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState<number>(0);

  return (
    <body>
      <div>Hello, Vite</div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <div>Clicks: {count}</div>
    </body>
  );
}
