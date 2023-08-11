import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
	<div className="container">
		<div className="row">
			<div className="col-12 col-md-3">
			<Card/>	
			</div>
			<div className="col-12 col-md-3">
			<Card/>	
			</div>
			<div className="col-12 col-md-3">
			<Card/>	
			</div>
			<div className="col-12 col-md-3">
			<Card/>	
			</div>
		</div>
		</div>


			<Footer/>
		</div>
	);
};

export default Home;
