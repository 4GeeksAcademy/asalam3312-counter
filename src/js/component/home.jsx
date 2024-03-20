import React from "react";

//include images into your bundle
import Counter from "./Counter";

//create your first component
const Home = () => {
	return (
		<div id="father" className="d-flex d-flex justify-content-center text-white p-2">
			<Counter />
		</div>
	);
};

export default Home;
