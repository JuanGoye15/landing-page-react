import React from "react";
import Navbar from "./navbar.jsx"
import Jumbotron from "./jumbotron.jsx"
import Footer from "./footer.jsx"
import Cards from "./cards.jsx"
import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {
	return (
		<>
			<Navbar/>
			<Jumbotron/>
			<br/>
			<div className="d-flex flex-row mb-3 justify-content-center">
				<Cards img={"https://wallpapercave.com/wp/wp5609975.jpg"} title={"Musica Online"}/>
				<Cards img={"https://mundoentrenamiento.com/wp-content/uploads/2022/08/modric-madrid2021-500x500.webp"} title={"Futbol"}/>
				<Cards img={"data:image/jpeg;base64,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"} title={"Golden retriever"}/>
				<Cards img={"data:image/jpeg;base64,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"} title={"Husky"}/>
			</div>
			<Footer/>
		</>
	)
}

export default Home

//include images into your bundle



// const homeStyles = {
//     background: "black",
//     float: "left",
// 	fontSize: "30px",
// 	color: "white",
// 	padding: "15px"
// }

// const optionsStyles = {    
//     float: "right",
// 	fontSize: "25px",
// 	color: "white",
// 	padding: "15px"
// }

// const jumbotronStyles = {	
// 	float: "left",
// 	paddingLeft: "10px",
// 	color: "black",
// 	fontSize: "50px"
// }

// const jumbotronStyles2 = {	
// 	float: "left",	
// 	color: "black",	
// 	paddingTop: "-100px"
// }

// const buttonStyles = {	
// 	float: "left",
// 	paddingLeft: "50px",
// 	marginTop: "20px"	
// }

// const jumbotronGeneralStyles = {
// 	background: "black",
	
// }

// const cardStyles = {
// 	marginTop: "50px",
// 	padding: "10px",
// 	height: "60px",
// 	float: "left",
// 	width: "200px",
// 	marginLeft: "100px"

// }

// const cardTitleStyles = {
// 	fontSize: "30px",
// 	float: "left",
	
// }

// const cardTextStyles = {	
// 	float: "left",
// 	marginTop: "10px"
// }

// //create your first component
// const Home = (props) => {	
// 	return (
// 	<div>
// 		<div className="navbar bg-dark">
// 			<div className="navbar bg-dark" style={homeStyles}>
// 				<bold>{props.label}</bold>
// 			</div>
// 			<div className="navbar" style={optionsStyles}>
// 				{props.options}
// 			</div>
// 		</div>
// 		<div className="container">
// 			<div className="container">
// 				<div className="jumbotron m-5" style={jumbotronGeneralStyles} >
// 					<div className="jumbotron m-5" style={jumbotronStyles}>
// 						{props.jumbotronTitle}			
// 					</div>
// 					<div className="jumbtron m-5" style={jumbotronStyles2}>
// 						{props.jumbotronText}
// 					</div>
// 					<div className="container" style={buttonStyles}>
// 						<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
// 					</div>
// 				</div>				
// 			</div>
// 		</div>
// 		<div className="container">
// 			<div className="card" style={cardStyles}>
// 				<div className="container" style={cardTitleStyles}>
// 					<bold>{props.cardTitle}</bold>
// 				</div>
// 				<div className="container" style={cardTextStyles}>
// 					{props.cardText}
// 				</div>
// 				<div className="container" style={cardTextStyles}>
// 					<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="container">
// 			<div className="card" style={cardStyles}>
// 				<div className="container" style={cardTitleStyles}>
// 					<bold>{props.cardTitle}</bold>
// 				</div>
// 				<div className="container" style={cardTextStyles}>
// 					{props.cardText}
// 				</div>
// 				<div className="container" style={cardTextStyles}>
// 					<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="container">
// 			<div className="card" style={cardStyles}>
// 				<div className="container" style={cardTitleStyles}>
// 					<bold>{props.cardTitle}</bold>
// 				</div>
// 				<div className="container" style={cardTextStyles}>
// 					{props.cardText}
// 				</div>
// 				<div className="container" style={cardTextStyles}>
// 					<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
// 				</div>
// 			</div>
// 		</div>
// 		<div className="container">
// 			<div className="card" style={cardStyles}>
// 				<div className="container" style={cardTitleStyles}>
// 					<bold>{props.cardTitle}</bold>
// 				</div>
// 				<div className="container" style={cardTextStyles}>
// 					{props.cardText}
// 				</div>
// 				<div className="container" style={cardTextStyles}>
// 					<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
// 				</div>
// 			</div>
// 		</div>
// 	</div>

// 	);
// };

// Home.propTypes = {
// 	label: PropTypes.string, 
// 	options: PropTypes.string,
// 	jumbotronTitle: PropTypes.string,
// 	jumbotronText: PropTypes.string,
// 	buttonLabel: PropTypes.string,
// 	cardTitle: PropTypes.string
// };


// export default Home;


