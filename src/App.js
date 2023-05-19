import React from "react";
import "./App.css";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <div className="grid min-h-screen place-items-center">
        <div className="w-full max-w-[480px] mx-auto my-0">
          <div className="text-center mb-2">
            <h2>our reviews</h2>
            <div className="bg-blue-700 w-20 mx-auto h-1"></div>
          </div>
          <Reviews />
        </div>
      </div>
    </>
  );
}

export default App;
