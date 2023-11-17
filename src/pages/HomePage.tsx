import { useState } from "react";

export default function HomePage() {
  return (
    <>
      {/* Top Bar */}
      <TopBar />
      <main className="container mx-auto mt-16">
        {/* <CustomersButton /> */}
      </main>
    </>
  );
}

function TopBar() {
  return (
    <section className="fixed top-0 right-0 left-0" id="topbar">
      <div className=" flex flex-1 h-16 bg-zinc-100 shadow-xl items-center justify-start px-6 md:px-0">
        <div className="md:container md:mx-auto">
          <div className="text-2xl font-bold">Vite Foundation</div>
        </div>
      </div>
    </section>
  );
}

function CustomersButton() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center space-y-2 py-2 ">
      <div className="text-3xl">Satisfied Customers</div>
      <div className="flex max-w-sm w-28 justify-between">
        <div className="text-4xl"> {count}</div>
        <button
          className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}
