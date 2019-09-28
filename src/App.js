import React, { Component } from "react";

// import Stopwatch from "./components/Stopwatch";
import Countdown from "./Countdown";

class App extends Component {
render() {
return (
<div className="App">
{/* <div></div> */}
<div className="Timers">
{/* <Stopwatch /> */}
<Countdown />
</div>
</div>
);
}
}

export default App;
