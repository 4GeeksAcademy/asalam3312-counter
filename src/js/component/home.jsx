import React from "react";

//include images into your bundle
import Counter from "./Counter";

//create your first component
const Home = () => {
	return (
		<div className="d-flex d-flex justify-content-center bg-dark text-white p-2">
			<Counter />
		</div>
	);
};

export default Home;
