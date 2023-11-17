import { useState } from "react";

export default function HomePage() {
  return (
    <>
      {/* Top Bar */}
      <TopBar />
      <main className="container mx-auto mt-16 ">
        {/* <CustomersButton /> */}
        {/* Hero Section */}
        <div className=" flex flex-col md:flex-row md:justify-between items-center md:items-stretch  ">
          {/* Left Side Flex */}
          <div className="w-1/2">
            <div className="flex flex-col items-center md:items-start space-y-12 pt-16 md:pt-32">
              <div className="text-center md:text-left text-6xl font-bold ">
                Collaborate, Effortlessly
              </div>
              <p className="text-center md:text-left text-2xl text-zinc-600">
                Design, Iterate, and Ship Vite Apps faster than ever. Improve
                Collaboration by streamlining buzzwords at innovative levels of
                performance.
              </p>
              <button className=" w-full md:w-3/4  max-w-lg bg-teal-500 text-white font-bold text-lg tracking-wider py-4 rounded-xl">
                Download
              </button>
            </div>
          </div>
          {/* Right Side Flex */}
          <div className="flex flex-col justify-center items-center mx-auto  pt-10">
            <CustomersButton />
          </div>
        </div>
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
    <div className="flex flex-col items-center space-y-2 ">
      <div className="text-3xl tracking-wide">Satisfied Customers</div>
      <div className="flex max-w-sm w-28 justify-between">
        <div className="text-4xl"> {count}</div>
        <button
          className="bg-teal-500 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +1
        </button>
      </div>
    </div>
  );
}
