import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="container">
      <div className="text-3xl">Hello, Vite</div>
      <button
        className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <div>Clicks: {count}</div>
    </div>
  );
}
