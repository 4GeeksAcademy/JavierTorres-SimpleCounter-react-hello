import React from "react";
import Simplecounter from "./simplecounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="d-flex flex-row justify-content-center py-2 px-5 bg-black text-center">
			<Simplecounter />
		</div>
	);
};

export default Home;