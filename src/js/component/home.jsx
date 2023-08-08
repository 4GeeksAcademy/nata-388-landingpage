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
			
  <div class="row">
    <div class="col">
	<Card/>
    </div>
    <div class="col">
	<Card/>
    </div>
    <div class="col">
	<Card/>
    </div>
	<div class="col">
	<Card/>
    </div>
  </div>

			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
