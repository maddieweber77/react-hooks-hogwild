import React, {useState} from "react";
import Nav from "./Nav";
import Piggies from "./Piggies"

import hogs from "../porkers_data";

function App() {



	console.log(hogs)
	return (
		<div className="App">
			<Nav />
			<Piggies hogs={hogs} />
		</div>
	);
}

export default App;
