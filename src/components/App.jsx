import React from "react";
// import Login from "./Login";

// var isLoggedIn = false;
// function App() {
//   return <div className="container">{isLoggedIn ? <h1>Hello</h1> : <h1>Hello</h1>}</div>;
// }
const currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">
      {currentTime > 12 ? <h1>Why are you still working</h1> : null}
    </div>
  );
}

export default App;
