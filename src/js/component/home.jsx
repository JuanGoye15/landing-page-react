import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const homeStyles = {
    background: "black",
    float: "left",
	fontSize: "30px",
	color: "white",
	padding: "15px"
}

const optionsStyles = {    
    float: "right",
	fontSize: "25px",
	color: "white",
	padding: "15px"
}

const jumbotronStyles = {	
	float: "left",
	paddingLeft: "10px",
	color: "black",
	fontSize: "50px"
}

const jumbotronStyles2 = {	
	float: "left",	
	color: "black",	
	paddingTop: "-100px"
}

const buttonStyles = {	
	float: "left",
	paddingLeft: "50px",
	marginTop: "20px"	
}

const jumbotronGeneralStyles = {
	background: "black",
	
}

const cardStyles = {
	marginTop: "50px",
	padding: "10px",
	height: "60px",
	float: "left",
	width: "200px",
	marginLeft: "100px"

}

const cardTitleStyles = {
	fontSize: "30px",
	float: "left",
	
}

const cardTextStyles = {	
	float: "left",
	marginTop: "10px"
}

//create your first component
const Home = (props) => {	
	return (
	<div>
		<div className="navbar bg-dark">
			<div className="navbar bg-dark" style={homeStyles}>
				<bold>{props.label}</bold>
			</div>
			<div className="navbar" style={optionsStyles}>
				{props.options}
			</div>
		</div>
		<div className="container">
			<div className="container">
				<div className="jumbotron m-5" style={jumbotronGeneralStyles} >
					<div className="jumbotron m-5" style={jumbotronStyles}>
						{props.jumbotronTitle}			
					</div>
					<div className="jumbtron m-5" style={jumbotronStyles2}>
						{props.jumbotronText}
					</div>
					<div className="container" style={buttonStyles}>
						<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
					</div>
				</div>				
			</div>
		</div>
		<div className="container">
			<div className="card" style={cardStyles}>
				<div className="container" style={cardTitleStyles}>
					<bold>{props.cardTitle}</bold>
				</div>
				<div className="container" style={cardTextStyles}>
					{props.cardText}
				</div>
				<div className="container" style={cardTextStyles}>
					<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="card" style={cardStyles}>
				<div className="container" style={cardTitleStyles}>
					<bold>{props.cardTitle}</bold>
				</div>
				<div className="container" style={cardTextStyles}>
					{props.cardText}
				</div>
				<div className="container" style={cardTextStyles}>
					<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="card" style={cardStyles}>
				<div className="container" style={cardTitleStyles}>
					<bold>{props.cardTitle}</bold>
				</div>
				<div className="container" style={cardTextStyles}>
					{props.cardText}
				</div>
				<div className="container" style={cardTextStyles}>
					<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="card" style={cardStyles}>
				<div className="container" style={cardTitleStyles}>
					<bold>{props.cardTitle}</bold>
				</div>
				<div className="container" style={cardTextStyles}>
					{props.cardText}
				</div>
				<div className="container" style={cardTextStyles}>
					<button type="button" class="btn btn-primary">{props.buttonLabel}</button>
				</div>
			</div>
		</div>
	</div>

	);
};

Home.propTypes = {
	label: PropTypes.string, 
	options: PropTypes.string,
	jumbotronTitle: PropTypes.string,
	jumbotronText: PropTypes.string,
	buttonLabel: PropTypes.string,
	cardTitle: PropTypes.string
};


export default Home;


